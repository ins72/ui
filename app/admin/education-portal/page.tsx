'use client';

import React, { useState, useEffect } from 'react';
import Layout from '@/style-reference/components/Layout';
import Card from '@/style-reference/components/Card';
import Button from '@/style-reference/components/Button';
import Badge from '@/style-reference/components/Badge';
import Icon from '@/style-reference/components/Icon';
import Tabs from '@/style-reference/components/Tabs';
import Field from '@/style-reference/components/Field';
import Select from '@/style-reference/components/Select';
import Modal from '@/style-reference/components/Modal';
import DataTable from '@/style-reference/components/DataTable';

export const dynamic = 'force-dynamic';

interface Student {
  id: number;
  student_id: string;
  first_name: string;
  last_name: string;
  grade_level: string;
  gpa: number;
  enrollment_status: string;
  email: string;
  phone: string;
  enrollment_date: string;
}

interface Course {
  id: number;
  course_code: string;
  course_name: string;
  department: string;
  credit_hours: number;
  instructor: string;
  enrollment: number;
  max_enrollment: number;
  status: string;
}

interface SelectOption {
  id: number;
  name: string;
}

export default function EducationPortalPage() {
  const [activeTab, setActiveTab] = useState({ id: 1, name: 'Dashboard' });
  const [students, setStudents] = useState<Student[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [newStudent, setNewStudent] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    grade_level: '',
    major: '',
    enrollment_status: 'enrolled'
  });

  const [newCourse, setNewCourse] = useState({
    course_code: '',
    course_name: '',
    department: '',
    credit_hours: '',
    instructor: '',
    max_enrollment: ''
  });

  const tabOptions = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Students' },
    { id: 3, name: 'Courses' },
    { id: 4, name: 'Grades & Transcripts' },
    { id: 5, name: 'Analytics' },
    { id: 6, name: 'FERPA Compliance' }
  ];

  const gradeOptions = [
    { id: 1, name: 'Kindergarten' },
    { id: 2, name: '1st Grade' },
    { id: 3, name: '2nd Grade' },
    { id: 4, name: '3rd Grade' },
    { id: 5, name: '4th Grade' },
    { id: 6, name: '5th Grade' },
    { id: 7, name: '6th Grade' },
    { id: 8, name: '7th Grade' },
    { id: 9, name: '8th Grade' },
    { id: 10, name: '9th Grade' },
    { id: 11, name: '10th Grade' },
    { id: 12, name: '11th Grade' },
    { id: 13, name: '12th Grade' },
    { id: 14, name: 'College Freshman' },
    { id: 15, name: 'College Sophomore' },
    { id: 16, name: 'College Junior' },
    { id: 17, name: 'College Senior' }
  ];

  const departmentOptions = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'English Language Arts' },
    { id: 4, name: 'Social Studies' },
    { id: 5, name: 'Physical Education' },
    { id: 6, name: 'Arts' },
    { id: 7, name: 'Computer Science' },
    { id: 8, name: 'Foreign Languages' }
  ];

  const enrollmentStatusOptions = [
    { id: 1, name: 'Enrolled' },
    { id: 2, name: 'On Leave' },
    { id: 3, name: 'Graduated' },
    { id: 4, name: 'Transferred' },
    { id: 5, name: 'Withdrawn' }
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Simulate API calls
      setTimeout(() => {
        setStudents([
          {
            id: 1,
            student_id: 'STU2024001',
            first_name: 'Emma',
            last_name: 'Johnson',
            grade_level: '10th Grade',
            gpa: 3.8,
            enrollment_status: 'enrolled',
            email: 'emma.johnson@email.com',
            phone: '(555) 123-4567',
            enrollment_date: '2024-08-15'
          },
          {
            id: 2,
            student_id: 'STU2024002',
            first_name: 'Michael',
            last_name: 'Chen',
            grade_level: '11th Grade',
            gpa: 3.9,
            enrollment_status: 'enrolled',
            email: 'michael.chen@email.com',
            phone: '(555) 234-5678',
            enrollment_date: '2023-08-20'
          },
          {
            id: 3,
            student_id: 'STU2024003',
            first_name: 'Sofia',
            last_name: 'Rodriguez',
            grade_level: '9th Grade',
            gpa: 3.6,
            enrollment_status: 'enrolled',
            email: 'sofia.rodriguez@email.com',
            phone: '(555) 345-6789',
            enrollment_date: '2024-08-15'
          }
        ]);

        setCourses([
          {
            id: 1,
            course_code: 'MATH101',
            course_name: 'Algebra I',
            department: 'Mathematics',
            credit_hours: 3,
            instructor: 'Dr. Sarah Wilson',
            enrollment: 28,
            max_enrollment: 30,
            status: 'active'
          },
          {
            id: 2,
            course_code: 'ENG201',
            course_name: 'English Literature',
            department: 'English Language Arts',
            credit_hours: 3,
            instructor: 'Prof. James Martinez',
            enrollment: 25,
            max_enrollment: 25,
            status: 'full'
          },
          {
            id: 3,
            course_code: 'SCI150',
            course_name: 'Biology',
            department: 'Science',
            credit_hours: 4,
            instructor: 'Dr. Lisa Anderson',
            enrollment: 22,
            max_enrollment: 30,
            status: 'active'
          }
        ]);

        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const createStudent = async () => {
    try {
      const student = {
        ...newStudent,
        id: Date.now(),
        student_id: `STU${new Date().getFullYear()}${String(students.length + 1).padStart(3, '0')}`,
        gpa: 0.0,
        enrollment_date: new Date().toISOString().split('T')[0]
      };
      
      setStudents(prev => [...prev, student]);
      setShowStudentModal(false);
      setNewStudent({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        grade_level: '',
        major: '',
        enrollment_status: 'enrolled'
      });
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  const createCourse = async () => {
    try {
      const course = {
        ...newCourse,
        id: Date.now(),
        credit_hours: parseInt(newCourse.credit_hours),
        max_enrollment: parseInt(newCourse.max_enrollment),
        enrollment: 0,
        status: 'active'
      };
      
      setCourses(prev => [...prev, course]);
      setShowCourseModal(false);
      setNewCourse({
        course_code: '',
        course_name: '',
        department: '',
        credit_hours: '',
        instructor: '',
        max_enrollment: ''
      });
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const studentColumns = [
    {
      key: 'student_id',
      title: 'Student ID',
      render: (value: string, record: Student) => (
        <div>
          <div className="font-medium text-t-primary">{value}</div>
          <div className="text-sm text-t-secondary">{record.first_name} {record.last_name}</div>
        </div>
      )
    },
    {
      key: 'grade_level',
      title: 'Grade Level',
      render: (value: string) => (
        <Badge variant="default">{value}</Badge>
      )
    },
    {
      key: 'gpa',
      title: 'GPA',
      render: (value: number) => (
        <div className="flex items-center gap-2">
          <span className="font-medium">{value.toFixed(1)}</span>
          <div className="w-16 h-2 bg-b-surface2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-01 rounded-full"
              style={{ width: `${(value / 4.0) * 100}%` }}
            />
          </div>
        </div>
      )
    },
    {
      key: 'enrollment_status',
      title: 'Status',
      render: (value: string) => (
        <Badge 
          variant={
            value === 'enrolled' ? 'green' : 
            value === 'graduated' ? 'default' : 
            value === 'on_leave' ? 'yellow' : 'gray'
          }
        >
          {value.replace('_', ' ')}
        </Badge>
      )
    },
    {
      key: 'email',
      title: 'Contact',
      render: (value: string, record: Student) => (
        <div>
          <div className="text-sm text-t-primary">{value}</div>
          <div className="text-sm text-t-secondary">{record.phone}</div>
        </div>
      )
    }
  ];

  const courseColumns = [
    {
      key: 'course_code',
      title: 'Course',
      render: (value: string, record: Course) => (
        <div>
          <div className="font-medium text-t-primary">{value}</div>
          <div className="text-sm text-t-secondary">{record.course_name}</div>
        </div>
      )
    },
    {
      key: 'department',
      title: 'Department',
      render: (value: string) => (
        <Badge variant="default">{value}</Badge>
      )
    },
    {
      key: 'credit_hours',
      title: 'Credits',
      render: (value: number) => (
        <span className="font-medium text-t-primary">{value}</span>
      )
    },
    {
      key: 'instructor',
      title: 'Instructor',
      render: (value: string) => value
    },
    {
      key: 'enrollment',
      title: 'Enrollment',
      render: (value: number, record: Course) => (
        <div className="flex items-center gap-2">
          <span className="font-medium">{value}/{record.max_enrollment}</span>
          <Badge variant={record.status === 'full' ? 'red' : 'green'}>
            {record.status}
          </Badge>
        </div>
      )
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">Education Management Dashboard</h2>
        <p className="text-body-2 text-t-secondary">Comprehensive student information system with FERPA compliance and academic analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Students">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">1,247</div>
            <div className="text-sm text-t-secondary">+23 this semester</div>
          </div>
        </Card>
        
        <Card title="Active Courses">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">156</div>
            <div className="text-sm text-t-secondary">8 departments</div>
          </div>
        </Card>
        
        <Card title="Average GPA">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">3.42</div>
            <div className="text-sm text-t-secondary">+0.1 vs last term</div>
          </div>
        </Card>
        
        <Card title="Graduation Rate">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">94.8%</div>
            <div className="text-sm text-t-secondary">Above state average</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Academic Performance Trends">
          <div className="text-center py-12">
            <Icon name="trending-up" className="w-16 h-16 text-t-tertiary mx-auto mb-4" />
            <p className="text-t-secondary">Grade trends and academic performance analytics would be displayed here</p>
          </div>
        </Card>

        <Card title="Upcoming Events">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border-l-4 border-primary-01 bg-b-surface1">
              <div>
                <div className="font-medium text-t-primary">Parent-Teacher Conferences</div>
                <div className="text-sm text-t-secondary">March 15-17, 2024</div>
              </div>
              <Badge variant="default">3 days</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border-l-4 border-yellow-500 bg-b-surface1">
              <div>
                <div className="font-medium text-t-primary">Spring Break</div>
                <div className="text-sm text-t-secondary">March 25 - April 1, 2024</div>
              </div>
              <Badge variant="yellow">Upcoming</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border-l-4 border-green-500 bg-b-surface1">
              <div>
                <div className="font-medium text-t-primary">Final Exams</div>
                <div className="text-sm text-t-secondary">May 10-17, 2024</div>
              </div>
              <Badge variant="green">Scheduled</Badge>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Recent Activity">
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 border border-s-stroke2 rounded-lg">
            <Icon name="user-plus" className="w-5 h-5 text-green-500" />
            <div className="flex-1">
              <div className="font-medium text-t-primary">New student enrollment</div>
              <div className="text-sm text-t-secondary">Emma Johnson enrolled in 10th Grade - 2 hours ago</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 border border-s-stroke2 rounded-lg">
            <Icon name="book" className="w-5 h-5 text-primary-01" />
            <div className="flex-1">
              <div className="font-medium text-t-primary">Course schedule updated</div>
              <div className="text-sm text-t-secondary">MATH101 - Algebra I schedule changed - 4 hours ago</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 border border-s-stroke2 rounded-lg">
            <Icon name="award" className="w-5 h-5 text-yellow-500" />
            <div className="flex-1">
              <div className="font-medium text-t-primary">Grade submission deadline</div>
              <div className="text-sm text-t-secondary">Mid-term grades due tomorrow - 6 hours ago</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-h5 font-semibold text-t-primary">Student Information System</h2>
          <p className="text-body-2 text-t-secondary">FERPA-compliant student records management with comprehensive academic tracking</p>
        </div>
        <Button 
          className="bg-primary-01 text-white"
          onClick={() => setShowStudentModal(true)}
        >
          <Icon name="user-plus" className="w-4 h-4 mr-2" />
          Add Student
        </Button>
      </div>

      <DataTable
        columns={studentColumns}
        data={students}
        loading={loading}
        actions={{
          onEdit: (record) => console.log('Edit student:', record.id),
          onDelete: (record) => console.log('Delete student:', record.id)
        }}
        showActions={true}
      />
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-h5 font-semibold text-t-primary">Course Management</h2>
          <p className="text-body-2 text-t-secondary">Manage course catalog, schedules, and enrollment with integrated gradebook</p>
        </div>
        <Button 
          className="bg-primary-01 text-white"
          onClick={() => setShowCourseModal(true)}
        >
          <Icon name="plus" className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </div>

      <DataTable
        columns={courseColumns}
        data={courses}
        loading={loading}
        actions={{
          onEdit: (record) => console.log('Edit course:', record.id),
          onDelete: (record) => console.log('Delete course:', record.id)
        }}
        showActions={true}
      />
    </div>
  );

  const renderGrades = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">Grades & Transcripts</h2>
        <p className="text-body-2 text-t-secondary">Grade management, transcript generation, and academic progress tracking</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Grade Entry & Management">
          <div className="space-y-4">
            <div className="p-4 border border-s-stroke2 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-t-primary">MATH101 - Algebra I</span>
                <Badge variant="green">28 students</Badge>
              </div>
              <p className="text-sm text-t-secondary mb-3">Mid-term exam grades pending entry</p>
              <Button className="bg-primary-01 text-white w-full">
                <Icon name="edit" className="w-4 h-4 mr-2" />
                Enter Grades
              </Button>
            </div>
            
            <div className="p-4 border border-s-stroke2 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-t-primary">ENG201 - English Literature</span>
                <Badge variant="yellow">25 students</Badge>
              </div>
              <p className="text-sm text-t-secondary mb-3">Final project grades due next week</p>
              <Button className="border border-s-stroke2 bg-b-surface2 text-t-primary w-full">
                <Icon name="calendar" className="w-4 h-4 mr-2" />
                Set Reminder
              </Button>
            </div>
          </div>
        </Card>

        <Card title="Transcript Services">
          <div className="space-y-4">
            <div className="text-center p-6">
              <Icon name="file-text" className="w-12 h-12 text-primary-01 mx-auto mb-3" />
              <h4 className="font-medium text-t-primary mb-2">Official Transcripts</h4>
              <p className="text-sm text-t-secondary mb-4">Generate secure, official academic transcripts</p>
              <Button className="bg-primary-01 text-white">
                <Icon name="download" className="w-4 h-4 mr-2" />
                Generate Transcript
              </Button>
            </div>
            
            <div className="border-t border-s-stroke2 pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-t-secondary">Recent transcript requests</span>
                <span className="text-primary-01 font-medium">View all</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">Academic Analytics</h2>
        <p className="text-body-2 text-t-secondary">Data-driven insights for educational excellence and student success</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Enrollment Trends">
          <div className="text-center py-8">
            <div className="text-2xl font-bold text-primary-01 mb-2">↗ 12%</div>
            <div className="text-sm text-t-secondary">Year-over-year growth</div>
          </div>
        </Card>

        <Card title="Academic Performance">
          <div className="text-center py-8">
            <div className="text-2xl font-bold text-green-600 mb-2">87.3%</div>
            <div className="text-sm text-t-secondary">Students above grade level</div>
          </div>
        </Card>

        <Card title="Retention Rate">
          <div className="text-center py-8">
            <div className="text-2xl font-bold text-primary-01 mb-2">96.2%</div>
            <div className="text-sm text-t-secondary">Student retention</div>
          </div>
        </Card>
      </div>

      <Card title="Performance Analytics Dashboard">
        <div className="text-center py-12">
          <Icon name="bar-chart" className="w-16 h-16 text-t-tertiary mx-auto mb-4" />
          <p className="text-t-secondary">Advanced analytics charts and student performance insights would be displayed here</p>
        </div>
      </Card>
    </div>
  );

  const renderCompliance = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">FERPA Compliance Management</h2>
        <p className="text-body-2 text-t-secondary">Ensure student privacy rights and maintain educational record compliance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Privacy Controls">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-t-primary">Data Encryption</h4>
                <p className="text-sm text-t-secondary">All student records encrypted at rest and in transit</p>
              </div>
              <Badge variant="green">Active</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-t-primary">Access Logging</h4>
                <p className="text-sm text-t-secondary">Comprehensive audit trail for all record access</p>
              </div>
              <Badge variant="green">Enabled</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-t-primary">Role-Based Access</h4>
                <p className="text-sm text-t-secondary">Granular permissions based on user roles</p>
              </div>
              <Badge variant="green">Configured</Badge>
            </div>
          </div>
        </Card>

        <Card title="Compliance Reports">
          <div className="space-y-4">
            <div className="p-4 border border-s-stroke2 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-t-primary">Monthly Audit Report</span>
                <Badge variant="default">Generated</Badge>
              </div>
              <p className="text-sm text-t-secondary mb-3">March 2024 compliance summary</p>
              <Button className="bg-primary-01 text-white w-full">
                <Icon name="download" className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
            
            <div className="p-4 border border-s-stroke2 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-t-primary">Access Log Review</span>
                <Badge variant="yellow">Pending</Badge>
              </div>
              <p className="text-sm text-t-secondary mb-3">Weekly access audit due tomorrow</p>
              <Button className="border border-s-stroke2 bg-b-surface2 text-t-primary w-full">
                <Icon name="eye" className="w-4 h-4 mr-2" />
                Review Logs
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Privacy Incident Management">
        <div className="text-center py-8">
          <Icon name="shield-check" className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h4 className="font-medium text-t-primary mb-2">No Active Incidents</h4>
          <p className="text-sm text-t-secondary">All student privacy controls are functioning properly</p>
        </div>
      </Card>
    </div>
  );

  return (
    <Layout title="Education Portal">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-h4 font-bold text-t-primary">Education Management System</h1>
            <p className="text-body-1 text-t-secondary">Comprehensive student information system with FERPA compliance and academic excellence tools</p>
          </div>
          <Badge variant="green">Enterprise Education Module</Badge>
        </div>

        <Card title="Education Portal">
          <Tabs 
            items={tabOptions}
            value={activeTab}
            setValue={setActiveTab}
            className="mb-6"
          />
          
          {activeTab.id === 1 && renderDashboard()}
          {activeTab.id === 2 && renderStudents()}
          {activeTab.id === 3 && renderCourses()}
          {activeTab.id === 4 && renderGrades()}
          {activeTab.id === 5 && renderAnalytics()}
          {activeTab.id === 6 && renderCompliance()}
        </Card>

        {/* Add Student Modal */}
        <Modal
          open={showStudentModal}
          onClose={() => setShowStudentModal(false)}
          className="max-w-2xl"
        >
          <div className="p-6">
            <h3 className="text-h6 font-semibold text-t-primary mb-6">Add New Student</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="First Name"
                  placeholder="Enter first name"
                  value={newStudent.first_name}
                  onChange={(e) => setNewStudent(prev => ({ ...prev, first_name: e.target.value }))}
                />
                <Field
                  label="Last Name"
                  placeholder="Enter last name"
                  value={newStudent.last_name}
                  onChange={(e) => setNewStudent(prev => ({ ...prev, last_name: e.target.value }))}
                />
              </div>
              
              <Field
                label="Email Address"
                type="email"
                placeholder="student@email.com"
                value={newStudent.email}
                onChange={(e) => setNewStudent(prev => ({ ...prev, email: e.target.value }))}
              />
              
              <Field
                label="Phone Number"
                placeholder="(555) 123-4567"
                value={newStudent.phone}
                onChange={(e) => setNewStudent(prev => ({ ...prev, phone: e.target.value }))}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Select
                  label="Grade Level"
                  options={gradeOptions}
                  value={gradeOptions.find(g => g.name === newStudent.grade_level) || null}
                  onChange={(option) => setNewStudent(prev => ({ ...prev, grade_level: option.name }))}
                />
                <Select
                  label="Enrollment Status"
                  options={enrollmentStatusOptions}
                  value={enrollmentStatusOptions.find(s => s.name.toLowerCase() === newStudent.enrollment_status) || null}
                  onChange={(option) => setNewStudent(prev => ({ ...prev, enrollment_status: option.name.toLowerCase() }))}
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button
                className="bg-primary-01 text-white flex-1"
                onClick={createStudent}
              >
                <Icon name="user-plus" className="w-4 h-4 mr-2" />
                Add Student
              </Button>
              <Button
                className="border border-s-stroke2 bg-b-surface2 text-t-primary flex-1"
                onClick={() => setShowStudentModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>

        {/* Add Course Modal */}
        <Modal
          open={showCourseModal}
          onClose={() => setShowCourseModal(false)}
          className="max-w-2xl"
        >
          <div className="p-6">
            <h3 className="text-h6 font-semibold text-t-primary mb-6">Add New Course</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Course Code"
                  placeholder="e.g., MATH101"
                  value={newCourse.course_code}
                  onChange={(e) => setNewCourse(prev => ({ ...prev, course_code: e.target.value }))}
                />
                <Field
                  label="Credit Hours"
                  type="number"
                  placeholder="3"
                  value={newCourse.credit_hours}
                  onChange={(e) => setNewCourse(prev => ({ ...prev, credit_hours: e.target.value }))}
                />
              </div>
              
              <Field
                label="Course Name"
                placeholder="e.g., Algebra I"
                value={newCourse.course_name}
                onChange={(e) => setNewCourse(prev => ({ ...prev, course_name: e.target.value }))}
              />
              
              <Select
                label="Department"
                options={departmentOptions}
                value={departmentOptions.find(d => d.name === newCourse.department) || null}
                onChange={(option) => setNewCourse(prev => ({ ...prev, department: option.name }))}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Instructor"
                  placeholder="Dr. Jane Smith"
                  value={newCourse.instructor}
                  onChange={(e) => setNewCourse(prev => ({ ...prev, instructor: e.target.value }))}
                />
                <Field
                  label="Max Enrollment"
                  type="number"
                  placeholder="30"
                  value={newCourse.max_enrollment}
                  onChange={(e) => setNewCourse(prev => ({ ...prev, max_enrollment: e.target.value }))}
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button
                className="bg-primary-01 text-white flex-1"
                onClick={createCourse}
              >
                <Icon name="plus" className="w-4 h-4 mr-2" />
                Add Course
              </Button>
              <Button
                className="border border-s-stroke2 bg-b-surface2 text-t-primary flex-1"
                onClick={() => setShowCourseModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
} 