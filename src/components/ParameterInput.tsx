import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Plus, Minus, ArrowLeft } from 'lucide-react';

interface ParameterInputProps {
  onBack: () => void;
  onSaveParameters: (parameters: any) => void;
}

export function ParameterInput({ onBack, onSaveParameters }: ParameterInputProps) {
  const [classrooms, setClassrooms] = useState([
    { name: 'Room 101', capacity: 60, type: 'lecture', building: 'A' },
    { name: 'Lab 201', capacity: 30, type: 'laboratory', building: 'B' }
  ]);

  const [subjects, setSubjects] = useState([
    { name: 'Data Structures', code: 'CS201', type: 'core', credits: 4, hoursPerWeek: 6 },
    { name: 'Digital Electronics', code: 'EC301', type: 'core', credits: 3, hoursPerWeek: 4 }
  ]);

  const [faculty, setFaculty] = useState([
    { name: 'Dr. Smith', department: 'Computer Science', subjects: ['CS201', 'CS301'], maxHours: 18 },
    { name: 'Prof. Johnson', department: 'Electronics', subjects: ['EC301', 'EC401'], maxHours: 16 }
  ]);

  const [batches, setBatches] = useState([
    { name: 'CSE 2022', department: 'Computer Science', semester: 4, strength: 58 },
    { name: 'ECE 2022', department: 'Electronics', semester: 4, strength: 45 }
  ]);

  const [globalSettings, setGlobalSettings] = useState({
    maxClassesPerDay: 6,
    workingDays: 5,
    breakDuration: 15,
    lunchBreakDuration: 60
  });

  const addClassroom = () => {
    setClassrooms([...classrooms, { name: '', capacity: 0, type: 'lecture', building: '' }]);
  };

  const removeClassroom = (index: number) => {
    setClassrooms(classrooms.filter((_, i) => i !== index));
  };

  const updateClassroom = (index: number, field: string, value: any) => {
    const updated = classrooms.map((classroom, i) => 
      i === index ? { ...classroom, [field]: value } : classroom
    );
    setClassrooms(updated);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: '', code: '', type: 'core', credits: 0, hoursPerWeek: 0 }]);
  };

  const removeSubject = (index: number) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const updateSubject = (index: number, field: string, value: any) => {
    const updated = subjects.map((subject, i) => 
      i === index ? { ...subject, [field]: value } : subject
    );
    setSubjects(updated);
  };

  const addFaculty = () => {
    setFaculty([...faculty, { name: '', department: '', subjects: [], maxHours: 0 }]);
  };

  const removeFaculty = (index: number) => {
    setFaculty(faculty.filter((_, i) => i !== index));
  };

  const updateFaculty = (index: number, field: string, value: any) => {
    const updated = faculty.map((member, i) => 
      i === index ? { ...member, [field]: value } : member
    );
    setFaculty(updated);
  };

  const addBatch = () => {
    setBatches([...batches, { name: '', department: '', semester: 1, strength: 0 }]);
  };

  const removeBatch = (index: number) => {
    setBatches(batches.filter((_, i) => i !== index));
  };

  const updateBatch = (index: number, field: string, value: any) => {
    const updated = batches.map((batch, i) => 
      i === index ? { ...batch, [field]: value } : batch
    );
    setBatches(updated);
  };

  const handleSave = () => {
    onSaveParameters({
      classrooms,
      subjects,
      faculty,
      batches,
      globalSettings
    });
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
            <h1>Setup Parameters</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="classrooms" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="classrooms">Classrooms</TabsTrigger>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="batches">Batches</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="classrooms">
            <Card>
              <CardHeader>
                <CardTitle>Classroom Configuration</CardTitle>
                <CardDescription>
                  Define available classrooms, their capacity, and types
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {classrooms.map((classroom, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Classroom {index + 1}</h3>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => removeClassroom(index)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <Label>Room Name</Label>
                        <Input
                          value={classroom.name}
                          onChange={(e) => updateClassroom(index, 'name', e.target.value)}
                          placeholder="e.g. Room 101"
                        />
                      </div>
                      <div>
                        <Label>Capacity</Label>
                        <Input
                          type="number"
                          value={classroom.capacity}
                          onChange={(e) => updateClassroom(index, 'capacity', parseInt(e.target.value))}
                          placeholder="60"
                        />
                      </div>
                      <div>
                        <Label>Type</Label>
                        <Select 
                          value={classroom.type}
                          onValueChange={(value) => updateClassroom(index, 'type', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lecture">Lecture Hall</SelectItem>
                            <SelectItem value="laboratory">Laboratory</SelectItem>
                            <SelectItem value="seminar">Seminar Room</SelectItem>
                            <SelectItem value="auditorium">Auditorium</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Building</Label>
                        <Input
                          value={classroom.building}
                          onChange={(e) => updateClassroom(index, 'building', e.target.value)}
                          placeholder="A"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button onClick={addClassroom} variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Classroom
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subjects">
            <Card>
              <CardHeader>
                <CardTitle>Subject Configuration</CardTitle>
                <CardDescription>
                  Define subjects, credits, and weekly hour requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {subjects.map((subject, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Subject {index + 1}</h3>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => removeSubject(index)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div>
                        <Label>Subject Name</Label>
                        <Input
                          value={subject.name}
                          onChange={(e) => updateSubject(index, 'name', e.target.value)}
                          placeholder="Data Structures"
                        />
                      </div>
                      <div>
                        <Label>Subject Code</Label>
                        <Input
                          value={subject.code}
                          onChange={(e) => updateSubject(index, 'code', e.target.value)}
                          placeholder="CS201"
                        />
                      </div>
                      <div>
                        <Label>Type</Label>
                        <Select 
                          value={subject.type}
                          onValueChange={(value) => updateSubject(index, 'type', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="core">Core</SelectItem>
                            <SelectItem value="elective">Elective</SelectItem>
                            <SelectItem value="practical">Practical</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Credits</Label>
                        <Input
                          type="number"
                          value={subject.credits}
                          onChange={(e) => updateSubject(index, 'credits', parseInt(e.target.value))}
                          placeholder="4"
                        />
                      </div>
                      <div>
                        <Label>Hours/Week</Label>
                        <Input
                          type="number"
                          value={subject.hoursPerWeek}
                          onChange={(e) => updateSubject(index, 'hoursPerWeek', parseInt(e.target.value))}
                          placeholder="6"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button onClick={addSubject} variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Subject
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faculty">
            <Card>
              <CardHeader>
                <CardTitle>Faculty Configuration</CardTitle>
                <CardDescription>
                  Define faculty members, their subjects, and maximum teaching hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {faculty.map((member, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Faculty {index + 1}</h3>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => removeFaculty(index)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <Label>Faculty Name</Label>
                        <Input
                          value={member.name}
                          onChange={(e) => updateFaculty(index, 'name', e.target.value)}
                          placeholder="Dr. Smith"
                        />
                      </div>
                      <div>
                        <Label>Department</Label>
                        <Input
                          value={member.department}
                          onChange={(e) => updateFaculty(index, 'department', e.target.value)}
                          placeholder="Computer Science"
                        />
                      </div>
                      <div>
                        <Label>Subject Codes (comma separated)</Label>
                        <Input
                          value={member.subjects.join(', ')}
                          onChange={(e) => updateFaculty(index, 'subjects', e.target.value.split(', ').filter(s => s.trim()))}
                          placeholder="CS201, CS301"
                        />
                      </div>
                      <div>
                        <Label>Max Hours/Week</Label>
                        <Input
                          type="number"
                          value={member.maxHours}
                          onChange={(e) => updateFaculty(index, 'maxHours', parseInt(e.target.value))}
                          placeholder="18"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button onClick={addFaculty} variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Faculty
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="batches">
            <Card>
              <CardHeader>
                <CardTitle>Batch Configuration</CardTitle>
                <CardDescription>
                  Define student batches, departments, and semester details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {batches.map((batch, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Batch {index + 1}</h3>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => removeBatch(index)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <Label>Batch Name</Label>
                        <Input
                          value={batch.name}
                          onChange={(e) => updateBatch(index, 'name', e.target.value)}
                          placeholder="CSE 2022"
                        />
                      </div>
                      <div>
                        <Label>Department</Label>
                        <Input
                          value={batch.department}
                          onChange={(e) => updateBatch(index, 'department', e.target.value)}
                          placeholder="Computer Science"
                        />
                      </div>
                      <div>
                        <Label>Semester</Label>
                        <Input
                          type="number"
                          value={batch.semester}
                          onChange={(e) => updateBatch(index, 'semester', parseInt(e.target.value))}
                          placeholder="4"
                        />
                      </div>
                      <div>
                        <Label>Student Strength</Label>
                        <Input
                          type="number"
                          value={batch.strength}
                          onChange={(e) => updateBatch(index, 'strength', parseInt(e.target.value))}
                          placeholder="58"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button onClick={addBatch} variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Batch
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Global Settings</CardTitle>
                <CardDescription>
                  Configure general scheduling parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Maximum Classes Per Day</Label>
                    <Input
                      type="number"
                      value={globalSettings.maxClassesPerDay}
                      onChange={(e) => setGlobalSettings({
                        ...globalSettings,
                        maxClassesPerDay: parseInt(e.target.value)
                      })}
                      placeholder="6"
                    />
                  </div>
                  <div>
                    <Label>Working Days Per Week</Label>
                    <Input
                      type="number"
                      value={globalSettings.workingDays}
                      onChange={(e) => setGlobalSettings({
                        ...globalSettings,
                        workingDays: parseInt(e.target.value)
                      })}
                      placeholder="5"
                    />
                  </div>
                  <div>
                    <Label>Break Duration (minutes)</Label>
                    <Input
                      type="number"
                      value={globalSettings.breakDuration}
                      onChange={(e) => setGlobalSettings({
                        ...globalSettings,
                        breakDuration: parseInt(e.target.value)
                      })}
                      placeholder="15"
                    />
                  </div>
                  <div>
                    <Label>Lunch Break Duration (minutes)</Label>
                    <Input
                      type="number"
                      value={globalSettings.lunchBreakDuration}
                      onChange={(e) => setGlobalSettings({
                        ...globalSettings,
                        lunchBreakDuration: parseInt(e.target.value)
                      })}
                      placeholder="60"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-end">
          <Button onClick={handleSave} size="lg">
            Save Parameters
          </Button>
        </div>
      </div>
    </div>
  );
}