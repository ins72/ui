'use client';

import React, { useState, useEffect } from 'react';
import Layout from '@/style-reference/components/Layout';
import Card from '@/style-reference/components/Card';
import Button from '@/style-reference/components/Button';
import Badge from '@/style-reference/components/Badge';
import Icon from '@/style-reference/components/Icon';
import Switch from '@/style-reference/components/Switch';
import Tabs from '@/style-reference/components/Tabs';
import Field from '@/style-reference/components/Field';
import Select from '@/style-reference/components/Select';
import Modal from '@/style-reference/components/Modal';
import axios from 'axios';

export const dynamic = 'force-dynamic';

export default function EnterpriseSecurityPage() {
  const [activeTab, setActiveTab] = useState({ id: 1, name: 'Authentication' });
  const [loading, setLoading] = useState(true);
  const [securityConfig, setSecurityConfig] = useState<any>(null);
  const [testModal, setTestModal] = useState(false);
  const [testType, setTestType] = useState('');
  const [testCredentials, setTestCredentials] = useState({ username: '', password: '' });

  const tabOptions = [
    { id: 1, name: 'Authentication' },
    { id: 2, name: 'Security Policies' },
    { id: 3, name: 'Compliance' },
    { id: 4, name: 'Risk Management' }
  ];

  useEffect(() => {
    fetchSecurityConfig();
  }, []);

  const fetchSecurityConfig = async () => {
    try {
      const orgId = localStorage.getItem('organization_id') || '1';
      const response = await axios.get(`/api/security/config?organization_id=${orgId}`);
      setSecurityConfig(response.data.result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching security config:', error);
      setLoading(false);
    }
  };

  const updateConfig = async (path: string, value: any) => {
    try {
      const orgId = localStorage.getItem('organization_id') || '1';
      const updates = {};
      path.split('.').reduce((obj, key, index, arr) => {
        if (index === arr.length - 1) {
          obj[key] = value;
        } else {
          obj[key] = obj[key] || {};
        }
        return obj[key];
      }, updates);

      await axios.put(`/api/security/config?organization_id=${orgId}`, updates);
      fetchSecurityConfig();
    } catch (error) {
      console.error('Error updating config:', error);
    }
  };

  const testAuthentication = async () => {
    try {
      const orgId = localStorage.getItem('organization_id') || '1';
      const endpoint = `/api/security/test/${testType}`;
      
      const payload = testType === 'saml' 
        ? { organization_id: orgId }
        : { organization_id: orgId, test_username: testCredentials.username, test_password: testCredentials.password };

      const response = await axios.post(endpoint, payload);
      alert(response.data.message);
      setTestModal(false);
    } catch (error: any) {
      alert(error.response?.data?.message || 'Test failed');
    }
  };

  const renderAuthenticationTab = () => (
    <>
      {/* SAML Configuration */}
      <Card title="SAML 2.0 Configuration">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium text-t-primary">Enable SAML Authentication</h4>
              <p className="text-sm text-t-secondary">Configure Single Sign-On with SAML 2.0 providers</p>
            </div>
            <Switch
              checked={securityConfig?.auth_providers?.saml?.enabled || false}
              onChange={(checked) => updateConfig('auth_providers.saml.enabled', checked)}
            />
          </div>

          {securityConfig?.auth_providers?.saml?.enabled && (
            <>
              <Field
                label="Entity ID"
                placeholder="https://your-domain.com/saml"
                value={securityConfig?.auth_providers?.saml?.entity_id || ''}
                onChange={(e) => updateConfig('auth_providers.saml.entity_id', e.target.value)}
              />
              <Field
                label="Metadata URL"
                placeholder="https://idp.example.com/metadata"
                value={securityConfig?.auth_providers?.saml?.metadata_url || ''}
                onChange={(e) => updateConfig('auth_providers.saml.metadata_url', e.target.value)}
              />
              <Field
                label="X509 Certificate"
                textarea
                placeholder="-----BEGIN CERTIFICATE-----"
                value={securityConfig?.auth_providers?.saml?.x509_cert || ''}
                onChange={(e) => updateConfig('auth_providers.saml.x509_cert', e.target.value)}
              />
              <Button
                className="bg-primary-01 text-white"
                onClick={() => { setTestType('saml'); setTestModal(true); }}
              >
                <Icon name="shield-check" className="w-4 h-4 mr-2" />
                Test SAML Connection
              </Button>
            </>
          )}
        </div>
      </Card>

      {/* LDAP Configuration */}
      <Card title="LDAP Configuration">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium text-t-primary">Enable LDAP Authentication</h4>
              <p className="text-sm text-t-secondary">Integrate with corporate LDAP directories</p>
            </div>
            <Switch
              checked={securityConfig?.auth_providers?.ldap?.enabled || false}
              onChange={(checked) => updateConfig('auth_providers.ldap.enabled', checked)}
            />
          </div>

          {securityConfig?.auth_providers?.ldap?.enabled && (
            <>
              <Field
                label="LDAP URL"
                placeholder="ldaps://ldap.example.com:636"
                value={securityConfig?.auth_providers?.ldap?.url || ''}
                onChange={(e) => updateConfig('auth_providers.ldap.url', e.target.value)}
              />
              <Field
                label="Bind DN"
                placeholder="cn=admin,dc=example,dc=com"
                value={securityConfig?.auth_providers?.ldap?.bind_dn || ''}
                onChange={(e) => updateConfig('auth_providers.ldap.bind_dn', e.target.value)}
              />
              <Field
                label="Search Base"
                placeholder="ou=users,dc=example,dc=com"
                value={securityConfig?.auth_providers?.ldap?.search_base || ''}
                onChange={(e) => updateConfig('auth_providers.ldap.search_base', e.target.value)}
              />
              <Button
                className="bg-primary-01 text-white"
                onClick={() => { setTestType('ldap'); setTestModal(true); }}
              >
                <Icon name="shield-check" className="w-4 h-4 mr-2" />
                Test LDAP Connection
              </Button>
            </>
          )}
        </div>
      </Card>

      {/* OAuth Providers */}
      <Card title="OAuth Providers">
        <div className="space-y-4">
          {/* Google OAuth */}
          <div className="p-4 border border-s-stroke2 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Icon name="mail" className="w-6 h-6 text-t-primary" />
                <div>
                  <h4 className="font-medium text-t-primary">Google OAuth</h4>
                  <p className="text-sm text-t-secondary">Enable Google sign-in</p>
                </div>
              </div>
              <Switch
                checked={securityConfig?.auth_providers?.oauth?.google?.enabled || false}
                onChange={(checked) => updateConfig('auth_providers.oauth.google.enabled', checked)}
              />
            </div>
          </div>

          {/* Microsoft OAuth */}
          <div className="p-4 border border-s-stroke2 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Icon name="briefcase" className="w-6 h-6 text-t-primary" />
                <div>
                  <h4 className="font-medium text-t-primary">Microsoft OAuth</h4>
                  <p className="text-sm text-t-secondary">Enable Microsoft/Azure AD sign-in</p>
                </div>
              </div>
              <Switch
                checked={securityConfig?.auth_providers?.oauth?.microsoft?.enabled || false}
                onChange={(checked) => updateConfig('auth_providers.oauth.microsoft.enabled', checked)}
              />
            </div>
          </div>

          {/* GitHub OAuth */}
          <div className="p-4 border border-s-stroke2 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Icon name="github" className="w-6 h-6 text-t-primary" />
                <div>
                  <h4 className="font-medium text-t-primary">GitHub OAuth</h4>
                  <p className="text-sm text-t-secondary">Enable GitHub sign-in</p>
                </div>
              </div>
              <Switch
                checked={securityConfig?.auth_providers?.oauth?.github?.enabled || false}
                onChange={(checked) => updateConfig('auth_providers.oauth.github.enabled', checked)}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );

  const renderSecurityPoliciesTab = () => (
    <>
      {/* Password Policy */}
      <Card title="Password Policy">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field
            label="Minimum Length"
            type="number"
            value={securityConfig?.security_policies?.password_policy?.min_length || 12}
            onChange={(e) => updateConfig('security_policies.password_policy.min_length', parseInt(e.target.value))}
          />
          <Field
            label="Maximum Age (days)"
            type="number"
            value={securityConfig?.security_policies?.password_policy?.max_age_days || 90}
            onChange={(e) => updateConfig('security_policies.password_policy.max_age_days', parseInt(e.target.value))}
          />
          <div className="flex items-center gap-3">
            <Switch
              checked={securityConfig?.security_policies?.password_policy?.require_uppercase || false}
              onChange={(checked) => updateConfig('security_policies.password_policy.require_uppercase', checked)}
            />
            <span className="text-t-primary">Require uppercase letters</span>
          </div>
          <div className="flex items-center gap-3">
            <Switch
              checked={securityConfig?.security_policies?.password_policy?.require_special_chars || false}
              onChange={(checked) => updateConfig('security_policies.password_policy.require_special_chars', checked)}
            />
            <span className="text-t-primary">Require special characters</span>
          </div>
        </div>
      </Card>

      {/* Session Policy */}
      <Card title="Session Management">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field
            label="Session Timeout (minutes)"
            type="number"
            value={securityConfig?.security_policies?.session_policy?.timeout_minutes || 60}
            onChange={(e) => updateConfig('security_policies.session_policy.timeout_minutes', parseInt(e.target.value))}
          />
          <Field
            label="Concurrent Sessions"
            type="number"
            value={securityConfig?.security_policies?.session_policy?.concurrent_sessions || 3}
            onChange={(e) => updateConfig('security_policies.session_policy.concurrent_sessions', parseInt(e.target.value))}
          />
          <div className="flex items-center gap-3">
            <Switch
              checked={securityConfig?.security_policies?.session_policy?.require_mfa_for_admin || false}
              onChange={(checked) => updateConfig('security_policies.session_policy.require_mfa_for_admin', checked)}
            />
            <span className="text-t-primary">Require MFA for admin users</span>
          </div>
        </div>
      </Card>

      {/* IP Restrictions */}
      <Card title="IP Restrictions">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium text-t-primary">Enable IP Restrictions</h4>
              <p className="text-sm text-t-secondary">Control access based on IP addresses</p>
            </div>
            <Switch
              checked={securityConfig?.security_policies?.ip_restrictions?.enabled || false}
              onChange={(checked) => updateConfig('security_policies.ip_restrictions.enabled', checked)}
            />
          </div>
        </div>
      </Card>
    </>
  );

  const renderComplianceTab = () => (
    <>
      {/* Compliance Overview */}
      <Card title="Compliance Framework Status">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 border border-s-stroke2 rounded-lg">
            <Icon name="shield" className="w-8 h-8 text-primary-01 mx-auto mb-2" />
            <h4 className="font-medium text-t-primary">SOC 2</h4>
            <Badge variant={securityConfig?.compliance_settings?.soc2?.enabled ? 'green' : 'gray'}>
              {securityConfig?.compliance_settings?.soc2?.enabled ? 'Enabled' : 'Disabled'}
            </Badge>
          </div>
          
          <div className="text-center p-4 border border-s-stroke2 rounded-lg">
            <Icon name="heart" className="w-8 h-8 text-primary-01 mx-auto mb-2" />
            <h4 className="font-medium text-t-primary">HIPAA</h4>
            <Badge variant={securityConfig?.compliance_settings?.hipaa?.enabled ? 'green' : 'gray'}>
              {securityConfig?.compliance_settings?.hipaa?.enabled ? 'Enabled' : 'Disabled'}
            </Badge>
          </div>
          
          <div className="text-center p-4 border border-s-stroke2 rounded-lg">
            <Icon name="lock" className="w-8 h-8 text-primary-01 mx-auto mb-2" />
            <h4 className="font-medium text-t-primary">GDPR</h4>
            <Badge variant={securityConfig?.compliance_settings?.gdpr?.enabled ? 'green' : 'gray'}>
              {securityConfig?.compliance_settings?.gdpr?.enabled ? 'Enabled' : 'Disabled'}
            </Badge>
          </div>
          
          <div className="text-center p-4 border border-s-stroke2 rounded-lg">
            <Icon name="credit-card" className="w-8 h-8 text-primary-01 mx-auto mb-2" />
            <h4 className="font-medium text-t-primary">PCI DSS</h4>
            <Badge variant={securityConfig?.compliance_settings?.pci_dss?.enabled ? 'green' : 'gray'}>
              {securityConfig?.compliance_settings?.pci_dss?.enabled ? 'Enabled' : 'Disabled'}
            </Badge>
          </div>
        </div>

        <div className="mt-6">
          <Button className="bg-primary-01 text-white">
            <Icon name="file-text" className="w-4 h-4 mr-2" />
            Generate Compliance Report
          </Button>
        </div>
      </Card>

      {/* Individual Compliance Settings */}
      <Card title="Compliance Configuration">
        <div className="space-y-4">
          {/* SOC 2 */}
          <div className="p-4 border border-s-stroke2 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-t-primary">SOC 2 Type II</h4>
                <p className="text-sm text-t-secondary">Service Organization Control compliance</p>
              </div>
              <Switch
                checked={securityConfig?.compliance_settings?.soc2?.enabled || false}
                onChange={(checked) => updateConfig('compliance_settings.soc2.enabled', checked)}
              />
            </div>
          </div>

          {/* HIPAA */}
          <div className="p-4 border border-s-stroke2 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-t-primary">HIPAA</h4>
                <p className="text-sm text-t-secondary">Healthcare data protection compliance</p>
              </div>
              <Switch
                checked={securityConfig?.compliance_settings?.hipaa?.enabled || false}
                onChange={(checked) => updateConfig('compliance_settings.hipaa.enabled', checked)}
              />
            </div>
          </div>

          {/* GDPR */}
          <div className="p-4 border border-s-stroke2 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-t-primary">GDPR</h4>
                <p className="text-sm text-t-secondary">European data protection regulation</p>
              </div>
              <Switch
                checked={securityConfig?.compliance_settings?.gdpr?.enabled || false}
                onChange={(checked) => updateConfig('compliance_settings.gdpr.enabled', checked)}
              />
            </div>
          </div>

          {/* PCI DSS */}
          <div className="p-4 border border-s-stroke2 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-t-primary">PCI DSS</h4>
                <p className="text-sm text-t-secondary">Payment card industry compliance</p>
              </div>
              <Switch
                checked={securityConfig?.compliance_settings?.pci_dss?.enabled || false}
                onChange={(checked) => updateConfig('compliance_settings.pci_dss.enabled', checked)}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );

  const renderRiskManagementTab = () => (
    <Card title="Risk-Based Authentication">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h4 className="font-medium text-t-primary">Enable Risk-Based Authentication</h4>
            <p className="text-sm text-t-secondary">Automatically adjust security requirements based on risk factors</p>
          </div>
          <Switch
            checked={securityConfig?.risk_based_authentication?.enabled || false}
            onChange={(checked) => updateConfig('risk_based_authentication.enabled', checked)}
          />
        </div>

        {securityConfig?.risk_based_authentication?.enabled && (
          <>
            <div className="border-t border-s-stroke2 pt-4">
              <h4 className="font-medium text-t-primary mb-3">Risk Factors</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Switch
                    checked={securityConfig?.risk_based_authentication?.factors?.unusual_location || false}
                    onChange={(checked) => updateConfig('risk_based_authentication.factors.unusual_location', checked)}
                  />
                  <span className="text-t-primary">Unusual location</span>
                </div>
                <div className="flex items-center gap-3">
                  <Switch
                    checked={securityConfig?.risk_based_authentication?.factors?.new_device || false}
                    onChange={(checked) => updateConfig('risk_based_authentication.factors.new_device', checked)}
                  />
                  <span className="text-t-primary">New device</span>
                </div>
                <div className="flex items-center gap-3">
                  <Switch
                    checked={securityConfig?.risk_based_authentication?.factors?.impossible_travel || false}
                    onChange={(checked) => updateConfig('risk_based_authentication.factors.impossible_travel', checked)}
                  />
                  <span className="text-t-primary">Impossible travel</span>
                </div>
                <div className="flex items-center gap-3">
                  <Switch
                    checked={securityConfig?.risk_based_authentication?.factors?.suspicious_activity || false}
                    onChange={(checked) => updateConfig('risk_based_authentication.factors.suspicious_activity', checked)}
                  />
                  <span className="text-t-primary">Suspicious activity</span>
                </div>
              </div>
            </div>

            <div className="border-t border-s-stroke2 pt-4">
              <h4 className="font-medium text-t-primary mb-3">Risk Actions</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Switch
                    checked={securityConfig?.risk_based_authentication?.actions?.require_mfa || false}
                    onChange={(checked) => updateConfig('risk_based_authentication.actions.require_mfa', checked)}
                  />
                  <span className="text-t-primary">Require MFA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Switch
                    checked={securityConfig?.risk_based_authentication?.actions?.send_alert || false}
                    onChange={(checked) => updateConfig('risk_based_authentication.actions.send_alert', checked)}
                  />
                  <span className="text-t-primary">Send security alert</span>
                </div>
                <div className="flex items-center gap-3">
                  <Switch
                    checked={securityConfig?.risk_based_authentication?.actions?.block_access || false}
                    onChange={(checked) => updateConfig('risk_based_authentication.actions.block_access', checked)}
                  />
                  <span className="text-t-primary">Block access</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Card>
  );

  if (loading) {
    return (
      <Layout title="Enterprise Security Configuration">
        <div className="flex items-center justify-center h-64">
          <Icon name="loader" className="w-8 h-8 animate-spin text-primary-01" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Enterprise Security Configuration">
      <Card
        title="Security Configuration"
        headContent={
          <div className="flex items-center gap-2">
            <Badge variant="green">Enterprise</Badge>
            <span className="text-sm text-t-secondary">Advanced security features</span>
          </div>
        }
      >
        <Tabs 
          items={tabOptions}
          value={activeTab}
          setValue={setActiveTab}
          className="mb-6"
        />
        
        {activeTab.id === 1 && renderAuthenticationTab()}
        {activeTab.id === 2 && renderSecurityPoliciesTab()}
        {activeTab.id === 3 && renderComplianceTab()}
        {activeTab.id === 4 && renderRiskManagementTab()}
      </Card>

      {/* Test Authentication Modal */}
      <Modal
        open={testModal}
        onClose={() => setTestModal(false)}
        className="max-w-md"
      >
        <div className="p-6">
          <h3 className="text-h6 font-semibold text-t-primary mb-4">Test {testType.toUpperCase()} Authentication</h3>
          
          {testType !== 'saml' && (
            <div className="space-y-4">
              <Field
                label="Test Username"
                placeholder="Enter test username"
                value={testCredentials.username}
                onChange={(e) => setTestCredentials(prev => ({ ...prev, username: e.target.value }))}
              />
              <Field
                label="Test Password"
                type="password"
                placeholder="Enter test password"
                value={testCredentials.password}
                onChange={(e) => setTestCredentials(prev => ({ ...prev, password: e.target.value }))}
              />
            </div>
          )}
          
          <div className="flex gap-3 mt-6">
            <Button
              className="bg-primary-01 text-white flex-1"
              onClick={testAuthentication}
            >
              <Icon name="play" className="w-4 h-4 mr-2" />
              Run Test
            </Button>
            <Button
              className="border border-s-stroke2 bg-b-surface2 text-t-primary flex-1"
              onClick={() => setTestModal(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
} 