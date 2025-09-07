import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ArrowLeft, Calendar, Clock, Users, Settings, RefreshCw } from 'lucide-react';

interface TimetableGeneratorProps {
  onBack: () => void;
  parameters: any;
  onTimetableGenerated: (timetables: any[]) => void;
}

export function TimetableGenerator({ onBack, parameters, onTimetableGenerated }: TimetableGeneratorProps) {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [generatedOptions, setGeneratedOptions] = useState<any[]>([]);

  // Mock timetable generation algorithm
  const generateTimetables = async () => {
    if (!selectedBatch) return;

    setIsGenerating(true);
    setGenerationProgress(0);

    // Simulate generation process with progress
    const steps = [
      'Analyzing constraints...',
      'Allocating classrooms...',
      'Assigning faculty...',
      'Optimizing schedule...',
      'Generating alternatives...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setGenerationProgress(((i + 1) / steps.length) * 100);
    }

    // Generate mock timetable options
    const timeSlots = [
      '9:00 AM - 10:00 AM',
      '10:00 AM - 11:00 AM',
      '11:15 AM - 12:15 PM',
      '12:15 PM - 1:15 PM',
      '2:15 PM - 3:15 PM',
      '3:15 PM - 4:15 PM'
    ];

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    
    const options = [
      {
        id: 1,
        name: 'Optimized for Room Utilization',
        score: 92,
        description: 'Maximizes classroom utilization while maintaining faculty preferences',
        conflicts: 2,
        roomUtilization: 95,
        facultyLoad: 85,
        schedule: generateMockSchedule(days, timeSlots)
      },
      {
        id: 2,
        name: 'Balanced Faculty Workload',
        score: 89,
        description: 'Evenly distributes teaching load among faculty members',
        conflicts: 1,
        roomUtilization: 88,
        facultyLoad: 92,
        schedule: generateMockSchedule(days, timeSlots)
      },
      {
        id: 3,
        name: 'Student-Friendly Schedule',
        score: 85,
        description: 'Minimizes gaps between classes for better student experience',
        conflicts: 3,
        roomUtilization: 82,
        facultyLoad: 87,
        schedule: generateMockSchedule(days, timeSlots)
      }
    ];

    setGeneratedOptions(options);
    setIsGenerating(false);
  };

  const generateMockSchedule = (days: string[], slots: string[]) => {
    const subjects = parameters?.subjects || [
      { name: 'Data Structures', code: 'CS201' },
      { name: 'Digital Electronics', code: 'EC301' },
      { name: 'Mathematics III', code: 'MA301' }
    ];
    
    const rooms = parameters?.classrooms || [
      { name: 'Room 101' },
      { name: 'Room 102' },
      { name: 'Lab 201' }
    ];

    const facultyMembers = parameters?.faculty || [
      { name: 'Dr. Smith' },
      { name: 'Prof. Johnson' },
      { name: 'Dr. Brown' }
    ];

    const schedule: any = {};
    
    days.forEach(day => {
      schedule[day] = {};
      slots.forEach((slot, slotIndex) => {
        if (slotIndex === 3) { // Lunch break
          schedule[day][slot] = {
            type: 'break',
            subject: 'Lunch Break',
            room: '',
            faculty: ''
          };
        } else if (Math.random() > 0.2) { // 80% chance of having a class
          const subject = subjects[Math.floor(Math.random() * subjects.length)];
          const room = rooms[Math.floor(Math.random() * rooms.length)];
          const faculty = facultyMembers[Math.floor(Math.random() * facultyMembers.length)];
          
          schedule[day][slot] = {
            type: 'class',
            subject: subject.name,
            code: subject.code,
            room: room.name,
            faculty: faculty.name
          };
        }
      });
    });

    return schedule;
  };

  const selectTimetable = (option: any) => {
    onTimetableGenerated([option]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Button variant="ghost" onClick={onBack} className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1>Generate Timetable</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Configuration Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Generation Configuration
            </CardTitle>
            <CardDescription>
              Select the batch and configure generation parameters
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Select Batch</label>
                <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a batch" />
                  </SelectTrigger>
                  <SelectContent>
                    {parameters?.batches?.map((batch: any, index: number) => (
                      <SelectItem key={index} value={batch.name}>
                        {batch.name} - {batch.department}
                      </SelectItem>
                    )) || [
                      <SelectItem key="cs2022" value="CSE 2022">CSE 2022 - Computer Science</SelectItem>,
                      <SelectItem key="ece2022" value="ECE 2022">ECE 2022 - Electronics</SelectItem>
                    ]}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={generateTimetables} 
                  disabled={!selectedBatch || isGenerating}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 mr-2" />
                      Generate Timetable
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generation Progress */}
        {isGenerating && (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Generating optimized timetables...</span>
                  <span>{Math.round(generationProgress)}%</span>
                </div>
                <Progress value={generationProgress} className="w-full" />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Generated Options */}
        {generatedOptions.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2>Generated Timetable Options</h2>
              <Badge variant="secondary">{generatedOptions.length} options available</Badge>
            </div>

            <div className="grid gap-6">
              {generatedOptions.map((option) => (
                <Card key={option.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          {option.name}
                          <Badge className="ml-2" variant={option.score >= 90 ? 'default' : 'secondary'}>
                            Score: {option.score}%
                          </Badge>
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {option.description}
                        </CardDescription>
                      </div>
                      <Button onClick={() => selectTimetable(option)}>
                        Select This Timetable
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <div>
                          <p className="text-sm font-medium">Room Utilization</p>
                          <p className="text-2xl">{option.roomUtilization}%</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-green-500" />
                        <div>
                          <p className="text-sm font-medium">Faculty Load Balance</p>
                          <p className="text-2xl">{option.facultyLoad}%</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <div>
                          <p className="text-sm font-medium">Conflicts</p>
                          <p className="text-2xl">{option.conflicts}</p>
                        </div>
                      </div>
                    </div>

                    {option.conflicts > 0 && (
                      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          <strong>Note:</strong> This timetable has {option.conflicts} minor conflict(s). 
                          These can be resolved through manual adjustments.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {generatedOptions.length === 0 && !isGenerating && (
          <Card>
            <CardContent className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Timetables Generated</h3>
              <p className="text-gray-500 mb-4">
                Select a batch and click "Generate Timetable" to create optimized schedules.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}