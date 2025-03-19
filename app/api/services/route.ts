import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../lib/db';

export async function GET(request: NextRequest) {
  try {
    const result = await query('SELECT * FROM services ORDER BY id ASC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
} 