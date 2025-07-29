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

interface Patient {
  id: number;
  patient_id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  phone: string;
  last_visit: string;
  status: string;
}

interface Appointment {
  id: number;
  appointment_id: string;
  patient_name: string;
  provider: string;
  appointment_type: string;
  scheduled_date: string;
  duration: number;
  status: string;
}

interface SelectOption {
  id: number;
  name: string;
}

export default function HealthcareModulePage() {
  const [activeTab, setActiveTab] = useState({ id: 1, name: 'Dashboard' });
  const [patients, setPatients] = useState<Patient[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [newPatient, setNewPatient] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    gender: 'male',
    phone: '',
    email: ''
  });

  const tabOptions = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Patients' },
    { id: 3, name: 'Appointments' },
    { id: 4, name: 'HIPAA Compliance' },
    { id: 5, name: 'Settings' }
  ];

  const genderOptions = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
    { id: 3, name: 'Other' },
    { id: 4, name: 'Prefer not to say' }
  ];

  const appointmentTypes = [
    { id: 1, name: 'Consultation' },
    { id: 2, name: 'Follow-up' },
    { id: 3, name: 'Procedure' },
    { id: 4, name: 'Screening' },
    { id: 5, name: 'Emergency' },
    { id: 6, name: 'Telehealth' }
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Simulate API calls
      setTimeout(() => {
        setPatients([
          {
            id: 1,
            patient_id: 'PAT-001',
            first_name: 'John',
            last_name: 'Doe',
            date_of_birth: '1985-06-15',
            gender: 'Male',
            phone: '(555) 123-4567',
            last_visit: '2024-01-10',
            status: 'Active'
          },
          {
            id: 2,
            patient_id: 'PAT-002',
            first_name: 'Jane',
            last_name: 'Smith',
            date_of_birth: '1990-03-22',
            gender: 'Female',
            phone: '(555) 987-6543',
            last_visit: '2024-01-12',
            status: 'Active'
          },
          {
            id: 3,
            patient_id: 'PAT-003',
            first_name: 'Robert',
            last_name: 'Johnson',
            date_of_birth: '1978-11-08',
            gender: 'Male',
            phone: '(555) 456-7890',
            last_visit: '2023-12-28',
            status: 'Inactive'
          }
        ]);

        setAppointments([
          {
            id: 1,
            appointment_id: 'APT-001',
            patient_name: 'John Doe',
            provider: 'Dr. Smith',
            appointment_type: 'Consultation',
            scheduled_date: '2024-01-16T10:00:00Z',
            duration: 30,
            status: 'Scheduled'
          },
          {
            id: 2,
            appointment_id: 'APT-002',
            patient_name: 'Jane Smith',
            provider: 'Dr. Johnson',
            appointment_type: 'Follow-up',
            scheduled_date: '2024-01-16T14:30:00Z',
            duration: 15,
            status: 'Confirmed'
          },
          {
            id: 3,
            appointment_id: 'APT-003',
            patient_name: 'Robert Johnson',
            provider: 'Dr. Brown',
            appointment_type: 'Screening',
            scheduled_date: '2024-01-17T09:00:00Z',
            duration: 45,
            status: 'Scheduled'
          }
        ]);

        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const addPatient = async () => {
    try {
      const patient = {
        ...newPatient,
        id: Date.now(),
        patient_id: `PAT-${String(patients.length + 1).padStart(3, '0')}`,
        last_visit: '',
        status: 'Active'
      };
      
      setPatients(prev => [...prev, patient]);
      setShowPatientModal(false);
      setNewPatient({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        gender: 'male',
        phone: '',
        email: ''
      });
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  const patientColumns = [
    {
      key: 'patient_id',
      title: 'Patient ID',
      render: (value: string) => (
        <Badge variant="default">{value}</Badge>
      )
    },
    {
      key: 'first_name',
      title: 'Patient Name',
      render: (value: string, record: Patient) => (
        <div>
          <div className="font-medium text-t-primary">{`${record.first_name} ${record.last_name}`}</div>
          <div className="text-sm text-t-secondary">{record.phone}</div>
        </div>
      )
    },
    {
      key: 'date_of_birth',
      title: 'Date of Birth',
      render: (value: string, record: Patient) => (
        <div>
          <div className="text-t-primary">{new Date(value).toLocaleDateString()}</div>
          <div className="text-sm text-t-secondary">{record.gender}</div>
        </div>
      )
    },
    {
      key: 'last_visit',
      title: 'Last Visit',
      render: (value: string) => (
        value ? new Date(value).toLocaleDateString() : 'No visits'
      )
    },
    {
      key: 'status',
      title: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'Active' ? 'green' : 'gray'}>
          {value}
        </Badge>
      )
    }
  ];

  const appointmentColumns = [
    {
      key: 'appointment_id',
      title: 'Appointment ID',
      render: (value: string) => (
        <Badge variant="default">{value}</Badge>
      )
    },
    {
      key: 'patient_name',
      title: 'Patient',
      render: (value: string, record: Appointment) => (
        <div>
          <div className="font-medium text-t-primary">{value}</div>
          <div className="text-sm text-t-secondary">{record.provider}</div>
        </div>
      )
    },
    {
      key: 'appointment_type',
      title: 'Type',
      render: (value: string) => (
        <Badge variant="default">{value}</Badge>
      )
    },
    {
      key: 'scheduled_date',
      title: 'Date & Time',
      render: (value: string, record: Appointment) => (
        <div>
          <div className="text-t-primary">{new Date(value).toLocaleDateString()}</div>
          <div className="text-sm text-t-secondary">
            {new Date(value).toLocaleTimeString()} ({record.duration}min)
          </div>
        </div>
      )
    },
    {
      key: 'status',
      title: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'Confirmed' ? 'green' : value === 'Scheduled' ? 'yellow' : 'gray'}>
          {value}
        </Badge>
      )
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">Healthcare Management Dashboard</h2>
        <p className="text-body-2 text-t-secondary">Comprehensive patient management with HIPAA compliance and telemedicine capabilities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Patients">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">1,247</div>
            <div className="text-sm text-t-secondary">+12 this week</div>
          </div>
        </Card>
        
        <Card title="Today's Appointments">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">24</div>
            <div className="text-sm text-t-secondary">3 confirmed, 21 scheduled</div>
          </div>
        </Card>
        
        <Card title="HIPAA Compliance">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">100%</div>
            <div className="text-sm text-t-secondary">All checks passed</div>
          </div>
        </Card>
        
        <Card title="Telemedicine Sessions">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">67</div>
            <div className="text-sm text-t-secondary">This month</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Patient Activity">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 border-l-4 border-primary-01 bg-b-surface1">
              <Icon name="user-plus" className="w-5 h-5 text-primary-01" />
              <div>
                <div className="font-medium text-t-primary">New Patient Registration</div>
                <div className="text-sm text-t-secondary">Sarah Wilson registered - 2 hours ago</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border-l-4 border-green-500 bg-b-surface1">
              <Icon name="calendar-check" className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-medium text-t-primary">Appointment Completed</div>
                <div className="text-sm text-t-secondary">John Doe - Consultation with Dr. Smith</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border-l-4 border-yellow-500 bg-b-surface1">
              <Icon name="video" className="w-5 h-5 text-yellow-500" />
              <div>
                <div className="font-medium text-t-primary">Telemedicine Session</div>
                <div className="text-sm text-t-secondary">Remote consultation with Dr. Johnson</div>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Compliance Status">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-t-primary">Data Encryption</span>
              <Badge variant="green">Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-t-primary">Access Controls</span>
              <Badge variant="green">Compliant</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-t-primary">Audit Logging</span>
              <Badge variant="green">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-t-primary">Backup Verification</span>
              <Badge variant="green">Current</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-t-primary">Incident Management</span>
              <Badge variant="green">No Issues</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderPatients = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-h5 font-semibold text-t-primary">Patient Management</h2>
          <p className="text-body-2 text-t-secondary">Secure patient records with comprehensive medical history tracking</p>
        </div>
        <Button 
          className="bg-primary-01 text-white"
          onClick={() => setShowPatientModal(true)}
        >
          <Icon name="user-plus" className="w-4 h-4 mr-2" />
          Add Patient
        </Button>
      </div>

      <DataTable
        columns={patientColumns}
        data={patients}
        loading={loading}
        actions={{
          onEdit: (record) => console.log('Edit patient:', record.id),
          onDelete: (record) => console.log('Delete patient:', record.id)
        }}
        showActions={true}
        showSearch={true}
        search={{
          value: '',
          onChange: (value) => console.log('Search:', value),
          placeholder: 'Search patients...'
        }}
      />
    </div>
  );

  const renderAppointments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-h5 font-semibold text-t-primary">Appointment Management</h2>
          <p className="text-body-2 text-t-secondary">Schedule and manage patient appointments with automated reminders</p>
        </div>
        <Button className="bg-primary-01 text-white">
          <Icon name="calendar-plus" className="w-4 h-4 mr-2" />
          Schedule Appointment
        </Button>
      </div>

      <DataTable
        columns={appointmentColumns}
        data={appointments}
        loading={loading}
        actions={{
          onEdit: (record) => console.log('Edit appointment:', record.id),
          onDelete: (record) => console.log('Cancel appointment:', record.id)
        }}
        showActions={true}
      />
    </div>
  );

  const renderCompliance = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">HIPAA Compliance Management</h2>
        <p className="text-body-2 text-t-secondary">Comprehensive compliance monitoring and audit trail management</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Security Controls">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-t-primary">Data Encryption (AES-256)</h4>
                <p className="text-sm text-t-secondary">Encryption at rest and in transit</p>
              </div>
              <Badge variant="green">Active</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-t-primary">Role-Based Access Control</h4>
                <p className="text-sm text-t-secondary">Minimum necessary access principle</p>
              </div>
              <Badge variant="green">Enforced</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-t-primary">Session Timeout</h4>
                <p className="text-sm text-t-secondary">30-minute idle timeout</p>
              </div>
              <Badge variant="green">Active</Badge>
            </div>
          </div>
        </Card>

        <Card title="Audit Trail">
          <div className="space-y-3">
            <div className="text-sm border-l-2 border-primary-01 pl-3">
              <div className="font-medium text-t-primary">User: admin@clinic.com</div>
              <div className="text-t-secondary">Accessed patient PAT-001 - 2 minutes ago</div>
            </div>
            <div className="text-sm border-l-2 border-green-500 pl-3">
              <div className="font-medium text-t-primary">User: dr.smith@clinic.com</div>
              <div className="text-t-secondary">Updated patient PAT-002 - 15 minutes ago</div>
            </div>
            <div className="text-sm border-l-2 border-blue-500 pl-3">
              <div className="font-medium text-t-primary">System: Automated Backup</div>
              <div className="text-t-secondary">Daily backup completed - 2 hours ago</div>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Compliance Reports">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="border border-s-stroke2 bg-b-surface2 text-t-primary p-6 h-auto flex-col">
            <Icon name="shield-check" className="w-8 h-8 mb-2 text-primary-01" />
            <span className="font-medium">Security Assessment</span>
            <span className="text-sm text-t-secondary">Generate security report</span>
          </Button>
          
          <Button className="border border-s-stroke2 bg-b-surface2 text-t-primary p-6 h-auto flex-col">
            <Icon name="file-text" className="w-8 h-8 mb-2 text-primary-01" />
            <span className="font-medium">Audit Log Export</span>
            <span className="text-sm text-t-secondary">Export audit trail</span>
          </Button>
          
          <Button className="border border-s-stroke2 bg-b-surface2 text-t-primary p-6 h-auto flex-col">
            <Icon name="alert-circle" className="w-8 h-8 mb-2 text-primary-01" />
            <span className="font-medium">Incident Report</span>
            <span className="text-sm text-t-secondary">Security incidents</span>
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">Healthcare Module Settings</h2>
        <p className="text-body-2 text-t-secondary">Configure facility information, integrations, and compliance settings</p>
      </div>

      <Card title="Facility Information">
        <div className="space-y-4">
          <Field
            label="Facility Name"
            placeholder="Medical Center Name"
            value="General Medical Center"
          />
          <Field
            label="License Number"
            placeholder="Medical License Number"
            value="MED-123456"
          />
          <Field
            label="Emergency Contact"
            placeholder="Emergency contact number"
            value="(555) 911-0000"
          />
        </div>
      </Card>

      <Card title="Integration Settings">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-t-primary">EHR System Integration</h4>
              <p className="text-sm text-t-secondary">Connect with Electronic Health Records</p>
            </div>
            <Button className="border border-s-stroke2 bg-b-surface2 text-t-primary">
              Configure
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-t-primary">Laboratory Integration</h4>
              <p className="text-sm text-t-secondary">Connect with lab systems for results</p>
            </div>
            <Button className="border border-s-stroke2 bg-b-surface2 text-t-primary">
              Configure
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-t-primary">Pharmacy Integration</h4>
              <p className="text-sm text-t-secondary">E-prescribing and medication management</p>
            </div>
            <Button className="border border-s-stroke2 bg-b-surface2 text-t-primary">
              Configure
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <Layout title="Healthcare Module">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-h4 font-bold text-t-primary">Healthcare Management System</h1>
            <p className="text-body-1 text-t-secondary">HIPAA-compliant patient management with telemedicine and comprehensive medical records</p>
          </div>
          <Badge variant="green">Industry-Specific Module</Badge>
        </div>

        <Card title="Healthcare Operations">
          <Tabs 
            items={tabOptions}
            value={activeTab}
            setValue={setActiveTab}
            className="mb-6"
          />
          
          {activeTab.id === 1 && renderDashboard()}
          {activeTab.id === 2 && renderPatients()}
          {activeTab.id === 3 && renderAppointments()}
          {activeTab.id === 4 && renderCompliance()}
          {activeTab.id === 5 && renderSettings()}
        </Card>

        {/* Add Patient Modal */}
        <Modal
          open={showPatientModal}
          onClose={() => setShowPatientModal(false)}
          className="max-w-2xl"
        >
          <div className="p-6">
            <h3 className="text-h6 font-semibold text-t-primary mb-6">Add New Patient</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="First Name"
                  placeholder="Enter first name"
                  value={newPatient.first_name}
                  onChange={(e) => setNewPatient(prev => ({ ...prev, first_name: e.target.value }))}
                />
                <Field
                  label="Last Name"
                  placeholder="Enter last name"
                  value={newPatient.last_name}
                  onChange={(e) => setNewPatient(prev => ({ ...prev, last_name: e.target.value }))}
                />
              </div>
              
              <Field
                label="Date of Birth"
                type="date"
                value={newPatient.date_of_birth}
                onChange={(e) => setNewPatient(prev => ({ ...prev, date_of_birth: e.target.value }))}
              />
              
              <Select
                label="Gender"
                options={genderOptions}
                value={genderOptions.find(g => g.name.toLowerCase() === newPatient.gender) || null}
                onChange={(option) => setNewPatient(prev => ({ ...prev, gender: option.name.toLowerCase() }))}
              />
              
              <Field
                label="Phone Number"
                placeholder="(555) 123-4567"
                value={newPatient.phone}
                onChange={(e) => setNewPatient(prev => ({ ...prev, phone: e.target.value }))}
              />
              
              <Field
                label="Email Address"
                type="email"
                placeholder="patient@email.com"
                value={newPatient.email}
                onChange={(e) => setNewPatient(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button
                className="bg-primary-01 text-white flex-1"
                onClick={addPatient}
              >
                <Icon name="user-plus" className="w-4 h-4 mr-2" />
                Add Patient
              </Button>
              <Button
                className="border border-s-stroke2 bg-b-surface2 text-t-primary flex-1"
                onClick={() => setShowPatientModal(false)}
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