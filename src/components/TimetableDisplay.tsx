import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ArrowLeft, Download, Printer, Send, Calendar, Clock, MapPin, User } from 'lucide-react';

interface TimetableDisplayProps {
  onBack: () => void;
  timetables: any[];
  onSendForApproval: (timetable: any) => void;
}

export function TimetableDisplay({ onBack, timetables, onSendForApproval }: TimetableDisplayProps) {
  const [selectedTimetable] = useState(timetables[0] || null);

  if (!selectedTimetable) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card>
          <CardContent className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Timetable Available</h3>
            <p className="text-gray-500 mb-4">
              Please generate a timetable first to view the schedule.
            </p>
            <Button onClick={onBack}>
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:15 AM - 12:15 PM',
    '12:15 PM - 1:15 PM',
    '2:15 PM - 3:15 PM',
    '3:15 PM - 4:15 PM'
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const exportTimetable = (format: 'pdf' | 'excel') => {
    // Mock export functionality
    console.log(`Exporting timetable in ${format} format...`);
    alert(`Timetable exported as ${format.toUpperCase()} file`);
  };

  const printTimetable = () => {
    window.print();
  };

  const handleSendForApproval = () => {
    onSendForApproval(selectedTimetable);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b print:shadow-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Button variant="ghost" onClick={onBack} className="mr-4 print:hidden">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1>Timetable Preview</h1>
            </div>
            <div className="flex items-center gap-2 print:hidden">
              <Button variant="outline" onClick={printTimetable}>
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" onClick={() => exportTimetable('pdf')}>
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <Button variant="outline" onClick={() => exportTimetable('excel')}>
                <Download className="w-4 h-4 mr-2" />
                Export Excel
              </Button>
              <Button onClick={handleSendForApproval}>
                <Send className="w-4 h-4 mr-2" />
                Send for Approval
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Timetable Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {selectedTimetable.name}
                </CardTitle>
                <CardDescription className="mt-2">
                  {selectedTimetable.description}
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={selectedTimetable.score >= 90 ? 'default' : 'secondary'}>
                  Score: {selectedTimetable.score}%
                </Badge>
                <Badge variant={selectedTimetable.conflicts === 0 ? 'default' : 'destructive'}>
                  {selectedTimetable.conflicts} Conflicts
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Room Utilization</p>
                  <p className="text-2xl">{selectedTimetable.roomUtilization}%</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <User className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Faculty Load Balance</p>
                  <p className="text-2xl">{selectedTimetable.facultyLoad}%</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Total Classes</p>
                  <p className="text-2xl">
                    {Object.values(selectedTimetable.schedule || {})
                      .flatMap((daySchedule: any) => Object.values(daySchedule))
                      .filter((slot: any) => slot?.type === 'class').length}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Timetable */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
            <CardDescription>
              Complete timetable for the selected batch
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-32">Time</TableHead>
                    {days.map(day => (
                      <TableHead key={day} className="text-center min-w-48">
                        {day}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timeSlots.map((slot, slotIndex) => (
                    <TableRow key={slot}>
                      <TableCell className="font-medium text-sm">
                        {slot}
                      </TableCell>
                      {days.map(day => {
                        const classInfo = selectedTimetable.schedule?.[day]?.[slot];
                        
                        if (classInfo?.type === 'break') {
                          return (
                            <TableCell key={day} className="text-center">
                              <div className="p-2 bg-gray-100 rounded-lg">
                                <p className="font-medium text-gray-600">Lunch Break</p>
                              </div>
                            </TableCell>
                          );
                        }
                        
                        if (classInfo?.type === 'class') {
                          return (
                            <TableCell key={day} className="p-2">
                              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="font-medium text-blue-900 text-sm">
                                  {classInfo.subject}
                                </p>
                                <p className="text-xs text-blue-700 mt-1">
                                  {classInfo.code}
                                </p>
                                <div className="flex items-center justify-between mt-2 text-xs text-blue-600">
                                  <span className="flex items-center">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {classInfo.room}
                                  </span>
                                  <span className="flex items-center">
                                    <User className="w-3 h-3 mr-1" />
                                    {classInfo.faculty?.split(' ')[0]}
                                  </span>
                                </div>
                              </div>
                            </TableCell>
                          );
                        }
                        
                        return (
                          <TableCell key={day} className="text-center">
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <p className="text-gray-400 text-sm">Free</p>
                            </div>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Summary and Notes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Total Teaching Hours</span>
                <span className="font-medium">
                  {Object.values(selectedTimetable.schedule || {})
                    .flatMap((daySchedule: any) => Object.values(daySchedule))
                    .filter((slot: any) => slot?.type === 'class').length} hours
                </span>
              </div>
              <div className="flex justify-between">
                <span>Free Periods</span>
                <span className="font-medium">
                  {(timeSlots.length * days.length) - 
                   Object.values(selectedTimetable.schedule || {})
                    .flatMap((daySchedule: any) => Object.values(daySchedule))
                    .filter((slot: any) => slot?.type === 'class' || slot?.type === 'break').length} periods
                </span>
              </div>
              <div className="flex justify-between">
                <span>Days with Classes</span>
                <span className="font-medium">{days.length} days</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  ✓ All subjects allocated optimal time slots
                </p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  ✓ Faculty workload balanced across the week
                </p>
              </div>
              {selectedTimetable.conflicts > 0 && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    ⚠ {selectedTimetable.conflicts} minor scheduling conflict(s) need attention
                  </p>
                </div>
              )}
              <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}