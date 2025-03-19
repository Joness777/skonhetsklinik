import { Pool } from 'pg';
import { sql } from '@vercel/postgres';

// For local development
export const pool = process.env.POSTGRES_URL
  ? undefined
  : new Pool({
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || '5432'),
      database: process.env.POSTGRES_DATABASE,
    });

// Helper function to execute SQL queries
export async function query(text: string, params?: any[]) {
  // Use Vercel Postgres in production, local pool in development
  if (process.env.POSTGRES_URL) {
    return sql.query(text, params);
  } else if (pool) {
    return pool.query(text, params);
  } else {
    throw new Error('Database connection not configured');
  }
}

// Database schema
export const schema = {
  services: `
    CREATE TABLE IF NOT EXISTS services (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      description TEXT,
      duration INTEGER NOT NULL,
      price INTEGER NOT NULL,
      image_url VARCHAR(255)
    );
  `,
  
  time_slots: `
    CREATE TABLE IF NOT EXISTS time_slots (
      id SERIAL PRIMARY KEY,
      start_time TIMESTAMP WITH TIME ZONE NOT NULL,
      end_time TIMESTAMP WITH TIME ZONE NOT NULL,
      is_available BOOLEAN DEFAULT TRUE,
      service_id INTEGER REFERENCES services(id)
    );
  `,
  
  bookings: `
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      service_id INTEGER REFERENCES services(id),
      time_slot_id INTEGER REFERENCES time_slots(id),
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `
};

// Initialize database tables
export async function initializeDatabase() {
  try {
    await query(schema.services);
    await query(schema.time_slots);
    await query(schema.bookings);
    console.log('Database tables initialized');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Seed initial data (services)
export async function seedServices() {
  const services = [
    {
      name: 'Ansiktsbehandling',
      slug: 'ansiktsbehandling',
      description: 'Vår signaturbehandling som rengör, återfuktar och ger näring åt huden. Inkluderar djuprengöring, peeling, extraction, mask och massage.',
      duration: 60,
      price: 895,
      image_url: '/images/facial.jpg'
    },
    {
      name: 'Massage',
      slug: 'massage',
      description: 'Avslappnande helkroppsmassage som löser upp spänningar och blockader. Våra utbildade terapeuter anpassar trycket efter dina behov.',
      duration: 50,
      price: 750,
      image_url: '/images/massage.jpg'
    },
    {
      name: 'Fransförlängning',
      slug: 'fransforlangning',
      description: 'Få längre, tjockare och naturligt vackra fransar med vår fransförlängning. Resultatet är både dramatiskt och naturligt.',
      duration: 90,
      price: 1295,
      image_url: '/images/eyelashes.jpg'
    },
    {
      name: 'Avancerad Hudvård',
      slug: 'hudvard',
      description: 'Intensiv återfuktande behandling för torr och känslig hud. Innehåller högkoncentrerad hyaluronsyra och vitaminer.',
      duration: 75,
      price: 1195,
      image_url: '/images/skincare.jpg'
    }
  ];

  try {
    // Check if services already exist
    const existingServices = await query('SELECT COUNT(*) FROM services');
    if (parseInt(existingServices.rows[0].count) > 0) {
      console.log('Services already seeded');
      return;
    }

    // Insert services
    for (const service of services) {
      await query(
        'INSERT INTO services (name, slug, description, duration, price, image_url) VALUES ($1, $2, $3, $4, $5, $6)',
        [service.name, service.slug, service.description, service.duration, service.price, service.image_url]
      );
    }
    console.log('Services seeded successfully');
  } catch (error) {
    console.error('Error seeding services:', error);
  }
} 