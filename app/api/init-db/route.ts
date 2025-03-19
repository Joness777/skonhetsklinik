import { NextRequest, NextResponse } from 'next/server';
import { initializeDatabase, seedServices } from '../../lib/db';

export async function GET(request: NextRequest) {
  try {
    // Initialize database tables
    await initializeDatabase();
    
    // Seed services data
    await seedServices();
    
    return NextResponse.json({ 
      message: 'Database initialized successfully' 
    });
  } catch (error) {
    console.error('Database initialization error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize database' },
      { status: 500 }
    );
  }
} 