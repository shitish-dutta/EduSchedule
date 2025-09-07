import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ArrowLeft, Check, X, Clock, User, Calendar, MessageSquare } from 'lucide-react';

interface ApprovalWorkflowProps {
  onBack: () => void;
  user: { username: string; role: string };
}

export function ApprovalWorkflow({ onBack, user }: ApprovalWorkflowProps) {
  const [pendingApprovals, setPendingApprovals] = useState([
    {
      id: 1,
      timetableName: 'CSE 2022 - Semester 4',
      submittedBy: 'Dr. Admin',
      submissionDate: '2024-09-05',
      batch: 'CSE 2022',
      department: 'Computer Science',
      status: 'pending',
      priority: 'high',
      comments: [],
      score: 92,
      conflicts: 1
    },
    {
      id: 2,
      timetableName: 'ECE 2021 - Semester 6',
      submittedBy: 'Prof. Smith',
      submissionDate: '2024-09-04',
      batch: 'ECE 2021',
      department: 'Electronics',
      status: 'pending',
      priority: 'medium',
      comments: [
        {
          author: 'Dr. Dean',
          message: 'Please check the lab allocation for Digital Signal Processing',
          timestamp: '2024-09-04 10:30 AM'
        }
      ],
      score: 87,
      conflicts: 2
    },
    {
      id: 3,
      timetableName: 'ME 2022 - Semester 4',
      submittedBy: 'Dr. Johnson',
      submissionDate: '2024-09-03',
      batch: 'ME 2022',
      department: 'Mechanical',
      status: 'approved',
      priority: 'low',
      comments: [],
      approvedBy: 'Dean Office',
      approvalDate: '2024-09-04',
      score: 94,
      conflicts: 0
    }
  ]);

  const [selectedTimetable, setSelectedTimetable] = useState<any>(null);
  const [actionType, setActionType] = useState<'approve' | 'reject' | 'comment' | null>(null);
  const [actionComment, setActionComment] = useState('');

  const handleApprovalAction = (timetableId: number, action: 'approve' | 'reject', comment: string) => {
    setPendingApprovals(prev => 
      prev.map(t => 
        t.id === timetableId 
          ? {
              ...t,
              status: action === 'approve' ? 'approved' : 'rejected',
              comments: comment ? [...t.comments, {
                author: user.username,
                message: comment,
                timestamp: new Date().toLocaleString()
              }] : t.comments,
              approvedBy: action === 'approve' ? user.username : undefined,
              approvalDate: action === 'approve' ? new Date().toLocaleDateString() : undefined,
              rejectedBy: action === 'reject' ? user.username : undefined,
              rejectionDate: action === 'reject' ? new Date().toLocaleDateString() : undefined
            }
          : t
      )
    );
    
    setSelectedTimetable(null);
    setActionType(null);
    setActionComment('');
  };

  const addComment = (timetableId: number, comment: string) => {
    setPendingApprovals(prev =>
      prev.map(t =>
        t.id === timetableId
          ? {
              ...t,
              comments: [...t.comments, {
                author: user.username,
                message: comment,
                timestamp: new Date().toLocaleString()
              }]
            }
          : t
      )
    );
    
    setActionComment('');
    setActionType(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-300">Pending Review</Badge>;
      case 'approved':
        return <Badge className="bg-green-600">Approved</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High Priority</Badge>;
      case 'medium':
        return <Badge variant="outline" className="text-orange-600 border-orange-300">Medium Priority</Badge>;
      case 'low':
        return <Badge variant="secondary">Low Priority</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
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
            <h1>Approval Workflow</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-medium text-yellow-600">
                    {pendingApprovals.filter(t => t.status === 'pending').length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Approved</p>
                  <p className="text-2xl font-medium text-green-600">
                    {pendingApprovals.filter(t => t.status === 'approved').length}
                  </p>
                </div>
                <Check className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rejected</p>
                  <p className="text-2xl font-medium text-red-600">
                    {pendingApprovals.filter(t => t.status === 'rejected').length}
                  </p>
                </div>
                <X className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-medium">{pendingApprovals.length}</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Approval Queue */}
        <Card>
          <CardHeader>
            <CardTitle>Timetable Approval Queue</CardTitle>
            <CardDescription>
              Review and approve/reject submitted timetables
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timetable</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Submitted By</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingApprovals.map((timetable) => (
                  <TableRow key={timetable.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{timetable.timetableName}</p>
                        <p className="text-sm text-muted-foreground">{timetable.department}</p>
                      </div>
                    </TableCell>
                    <TableCell>{timetable.batch}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {timetable.submittedBy}
                      </div>
                    </TableCell>
                    <TableCell>{timetable.submissionDate}</TableCell>
                    <TableCell>{getPriorityBadge(timetable.priority)}</TableCell>
                    <TableCell>
                      <div>
                        <span className="font-medium">{timetable.score}%</span>
                        <p className="text-xs text-muted-foreground">
                          {timetable.conflicts} conflicts
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(timetable.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {timetable.status === 'pending' && (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setSelectedTimetable(timetable);
                                setActionType('approve');
                              }}
                              className="text-green-600 border-green-300 hover:bg-green-50"
                            >
                              <Check className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setSelectedTimetable(timetable);
                                setActionType('reject');
                              }}
                              className="text-red-600 border-red-300 hover:bg-red-50"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedTimetable(timetable);
                            setActionType('comment');
                          }}
                        >
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Action Modal */}
        {selectedTimetable && actionType && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-lg mx-4">
              <CardHeader>
                <CardTitle>
                  {actionType === 'approve' && 'Approve Timetable'}
                  {actionType === 'reject' && 'Reject Timetable'}
                  {actionType === 'comment' && 'Add Comment'}
                </CardTitle>
                <CardDescription>
                  {selectedTimetable.timetableName} - {selectedTimetable.batch}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="comment">
                    {actionType === 'comment' ? 'Your Comment' : 'Comment (Optional)'}
                  </Label>
                  <Textarea
                    id="comment"
                    value={actionComment}
                    onChange={(e) => setActionComment(e.target.value)}
                    placeholder={
                      actionType === 'approve' 
                        ? 'Add any approval notes...'
                        : actionType === 'reject'
                        ? 'Please specify the reason for rejection...'
                        : 'Add your comment...'
                    }
                    rows={3}
                  />
                </div>

                {/* Display existing comments */}
                {selectedTimetable.comments.length > 0 && (
                  <div className="space-y-2">
                    <Label>Previous Comments</Label>
                    <div className="max-h-32 overflow-y-auto space-y-2">
                      {selectedTimetable.comments.map((comment: any, index: number) => (
                        <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                          <div className="flex justify-between items-start">
                            <span className="font-medium">{comment.author}</span>
                            <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                          </div>
                          <p className="mt-1">{comment.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedTimetable(null);
                      setActionType(null);
                      setActionComment('');
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      if (actionType === 'comment') {
                        addComment(selectedTimetable.id, actionComment);
                      } else {
                        handleApprovalAction(selectedTimetable.id, actionType, actionComment);
                      }
                    }}
                    disabled={actionType !== 'approve' && !actionComment.trim()}
                    variant={actionType === 'reject' ? 'destructive' : 'default'}
                  >
                    {actionType === 'approve' && 'Approve'}
                    {actionType === 'reject' && 'Reject'}
                    {actionType === 'comment' && 'Add Comment'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}