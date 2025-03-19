import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const serviceId = searchParams.get('serviceId');

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    // Convert date to proper format for querying
    const selectedDate = new Date(date);
    
    // Format the date as YYYY-MM-DD
    const formattedDate = selectedDate.toISOString().split('T')[0];
    
    let query_string = `
      SELECT * FROM time_slots 
      WHERE 
        DATE(start_time) = $1 
        AND is_available = TRUE 
    `;

    const queryParams = [formattedDate];

    if (serviceId) {
      query_string += ` AND (service_id IS NULL OR service_id = $2)`;
      queryParams.push(serviceId);
    } else {
      query_string += ` AND service_id IS NULL`;
    }

    query_string += ` ORDER BY start_time ASC`;

    const result = await query(query_string, queryParams);

    // If no slots found, generate default slots for this date
    if (result.rows.length === 0) {
      // In a real application, you would create slots in the database here
      // For this demo, we'll return mock data
      const slots = generateMockTimeSlots(selectedDate);
      return NextResponse.json(slots);
    }

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching time slots:', error);
    return NextResponse.json(
      { error: 'Failed to fetch time slots' },
      { status: 500 }
    );
  }
}

// Generate mock time slots for a given date
function generateMockTimeSlots(date: Date) {
  const slots = [];
  const startHour = 9; // 09:00
  const endHour = 17; // 17:00
  
  // Generate slots every 30 minutes
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      // Make around 20% of slots unavailable
      const isAvailable = Math.random() > 0.2;
      
      const startTime = new Date(date);
      startTime.setHours(hour, minute, 0, 0);
      
      const endTime = new Date(startTime);
      endTime.setMinutes(endTime.getMinutes() + 30);
      
      slots.push({
        id: `mock-${hour}-${minute}`,
        start_time: startTime.toISOString(),
        end_time: endTime.toISOString(),
        is_available: isAvailable,
        service_id: null
      });
    }
  }
  
  return slots;
} 