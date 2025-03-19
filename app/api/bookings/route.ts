import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { serviceId, timeSlotId, firstName, lastName, email, phone } = body;

    // Validate required fields
    if (!serviceId || !firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Check if the time slot is still available
    // 2. Begin a transaction
    // 3. Create the booking and mark the time slot as unavailable
    // 4. Commit the transaction
    
    // For this demo, we'll simulate a successful booking
    const mockBookingId = `booking-${Date.now()}`;
    
    // Return success response
    return NextResponse.json({ 
      id: mockBookingId,
      message: 'Booking created successfully'
    });
    
    /* Implementation for a real database:

    // Check if time slot is available
    const slotCheck = await query(
      'SELECT is_available FROM time_slots WHERE id = $1',
      [timeSlotId]
    );
    
    if (slotCheck.rows.length === 0 || !slotCheck.rows[0].is_available) {
      return NextResponse.json(
        { error: 'Selected time slot is no longer available' },
        { status: 409 }
      );
    }
    
    // Create booking and update time slot in a transaction
    await query('BEGIN');
    
    const bookingResult = await query(
      `INSERT INTO bookings 
        (service_id, time_slot_id, first_name, last_name, email, phone) 
       VALUES ($1, $2, $3, $4, $5, $6) 
       RETURNING id`,
      [serviceId, timeSlotId, firstName, lastName, email, phone]
    );
    
    await query(
      'UPDATE time_slots SET is_available = FALSE WHERE id = $1',
      [timeSlotId]
    );
    
    await query('COMMIT');
    
    return NextResponse.json({ 
      id: bookingResult.rows[0].id,
      message: 'Booking created successfully'
    });
    
    */
    
  } catch (error) {
    // In a real application, you would rollback the transaction on error
    // await query('ROLLBACK');
    
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
} 