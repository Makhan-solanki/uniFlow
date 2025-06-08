import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Book, Award, Edit3, Save, X, Camera, Eye, EyeOff, Lock, Bell, Globe, Shield } from 'lucide-react';

const ProfileComponent = ({ userProfile, onProfileUpdate, onClose }) => {
  // Default profile data if none provided
  const defaultProfile = {
    personalInfo: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      dateOfBirth: '1998-03-15',
      address: {
        street: '123 University Ave',
        city: 'Boston',
        state: 'MA',
        zipCode: '02115',
        country: 'United States'
      },
      profilePicture: null
    },
    academicInfo: {
      currentEducation: 'Bachelor of Science in Computer Science',
      institution: 'MIT',
      gpa: '3.85',
      graduationYear: '2025',
      previousEducation: [
        { degree: 'High School Diploma', institution: 'Lincoln High School', year: '2020', gpa: '4.0' }
      ]
    },
    preferences: {
      notifications: {
        email: true,
        sms: false,
        push: true,
        deadlineReminders: true,
        applicationUpdates: true
      },
      privacy: {
        profileVisibility: 'private',
        contactInfoVisible: false,
        academicInfoVisible: true
      },
      language: 'en',
      timezone: 'America/New_York'
    }
  };

  const profile = userProfile || defaultProfile;
  
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('personal');
  const [formData, setFormData] = useState(profile);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (section, field, value) => {
    if (section === 'address') {
      setFormData(prev => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          address: {
            ...prev.personalInfo.address,
            [field]: value
          }
        }
      }));
    } else if (section === 'notifications' || section === 'privacy') {
      setFormData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [section]: {
            ...prev.preferences[section],
            [field]: value
          }
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    }
  };

  const handleSave = () => {
    if (onProfileUpdate) {
      onProfileUpdate(formData);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePasswordSave = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    // Handle password update logic here
    alert('Password updated successfully!');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const ProfileSection = ({ title, icon: Icon, children, sectionKey }) => (
    <div className={`bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white border-opacity-20 transition-all duration-300 ${activeSection === sectionKey ? 'ring-2 ring-blue-500' : ''}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <Icon className="w-5 h-5 text-white"/>
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{title}</h3>
      </div>
      {children}
    </div>
  );

  const InputField = ({ label, value, onChange, type = 'text', disabled = false, placeholder }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled || !isEditing}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
          disabled || !isEditing 
            ? 'bg-gray-50 border-gray-200 cursor-not-allowed' 
            : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
        }`}
      />
    </div>
  );

  const ToggleSwitch = ({ label, checked, onChange, disabled = false }) => (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        disabled={disabled || !isEditing}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? 'bg-blue-500' : 'bg-gray-300'
        } ${disabled || !isEditing ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .animate-fadeInUp { 
            animation: fadeInUp 0.6s ease-out forwards; 
            opacity: 0; 
            transform: translateY(20px); 
          }
          @keyframes fadeInUp { 
            to { 
              opacity: 1; 
              transform: translateY(0); 
            } 
          }
        `
      }} />

      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-8 rounded-2xl text-white overflow-hidden animate-fadeInUp">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl font-bold">
                {formData.personalInfo.profilePicture ? (
                  <img src={formData.personalInfo.profilePicture} alt="Profile" className="w-full h-full rounded-full object-cover" />
                ) : (
                  `${formData.personalInfo.firstName.charAt(0)}${formData.personalInfo.lastName.charAt(0)}`
                )}
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
                  <Camera className="w-4 h-4 text-white" />
                </button>
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">{formData.personalInfo.firstName} {formData.personalInfo.lastName}</h2>
              <p className="text-blue-100 mb-1">{formData.academicInfo.currentEducation}</p>
              <p className="text-blue-200 text-sm">{formData.academicInfo.institution}</p>
            </div>
          </div>
          <div className="flex space-x-3">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2 bg-white bg-opacity-60 backdrop-blur-lg rounded-2xl p-2 shadow-lg overflow-x-auto">
        {[
          { id: 'personal', label: 'Personal Info', icon: User },
          { id: 'academic', label: 'Academic Info', icon: Book },
          { id: 'security', label: 'Security', icon: Lock },
          { id: 'preferences', label: 'Preferences', icon: Bell }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-medium transform hover:scale-105 ${
              activeSection === id 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                : 'text-gray-600 hover:bg-white'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Personal Information Section */}
      {activeSection === 'personal' && (
        <ProfileSection title="Personal Information" icon={User} sectionKey="personal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="First Name"
              value={formData.personalInfo.firstName}
              onChange={(value) => handleInputChange('personalInfo', 'firstName', value)}
            />
            <InputField
              label="Last Name"
              value={formData.personalInfo.lastName}
              onChange={(value) => handleInputChange('personalInfo', 'lastName', value)}
            />
            <InputField
              label="Email Address"
              value={formData.personalInfo.email}
              onChange={(value) => handleInputChange('personalInfo', 'email', value)}
              type="email"
            />
            <InputField
              label="Phone Number"
              value={formData.personalInfo.phone}
              onChange={(value) => handleInputChange('personalInfo', 'phone', value)}
              type="tel"
            />
            <InputField
              label="Date of Birth"
              value={formData.personalInfo.dateOfBirth}
              onChange={(value) => handleInputChange('personalInfo', 'dateOfBirth', value)}
              type="date"
            />
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Address Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <InputField
                  label="Street Address"
                  value={formData.personalInfo.address.street}
                  onChange={(value) => handleInputChange('address', 'street', value)}
                />
              </div>
              <InputField
                label="City"
                value={formData.personalInfo.address.city}
                onChange={(value) => handleInputChange('address', 'city', value)}
              />
              <InputField
                label="State/Province"
                value={formData.personalInfo.address.state}
                onChange={(value) => handleInputChange('address', 'state', value)}
              />
              <InputField
                label="ZIP/Postal Code"
                value={formData.personalInfo.address.zipCode}
                onChange={(value) => handleInputChange('address', 'zipCode', value)}
              />
              <InputField
                label="Country"
                value={formData.personalInfo.address.country}
                onChange={(value) => handleInputChange('address', 'country', value)}
              />
            </div>
          </div>
        </ProfileSection>
      )}

      {/* Academic Information Section */}
      {activeSection === 'academic' && (
        <ProfileSection title="Academic Information" icon={Book} sectionKey="academic">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Current Education"
                value={formData.academicInfo.currentEducation}
                onChange={(value) => handleInputChange('academicInfo', 'currentEducation', value)}
              />
              <InputField
                label="Institution"
                value={formData.academicInfo.institution}
                onChange={(value) => handleInputChange('academicInfo', 'institution', value)}
              />
              <InputField
                label="GPA"
                value={formData.academicInfo.gpa}
                onChange={(value) => handleInputChange('academicInfo', 'gpa', value)}
              />
              <InputField
                label="Expected Graduation Year"
                value={formData.academicInfo.graduationYear}
                onChange={(value) => handleInputChange('academicInfo', 'graduationYear', value)}
              />
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Previous Education</h4>
              {formData.academicInfo.previousEducation.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <InputField
                      label="Degree"
                      value={edu.degree}
                      onChange={(value) => {
                        const updated = [...formData.academicInfo.previousEducation];
                        updated[index].degree = value;
                        handleInputChange('academicInfo', 'previousEducation', updated);
                      }}
                    />
                    <InputField
                      label="Institution"
                      value={edu.institution}
                      onChange={(value) => {
                        const updated = [...formData.academicInfo.previousEducation];
                        updated[index].institution = value;
                        handleInputChange('academicInfo', 'previousEducation', updated);
                      }}
                    />
                    <InputField
                      label="Year"
                      value={edu.year}
                      onChange={(value) => {
                        const updated = [...formData.academicInfo.previousEducation];
                        updated[index].year = value;
                        handleInputChange('academicInfo', 'previousEducation', updated);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ProfileSection>
      )}

      {/* Security Section */}
      {activeSection === 'security' && (
        <ProfileSection title="Security Settings" icon={Lock} sectionKey="security">
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-yellow-600" />
                <h4 className="font-semibold text-yellow-800">Change Password</h4>
              </div>
              <p className="text-sm text-yellow-700 mb-4">Ensure your account is using a long, random password to stay secure.</p>
              
              <div className="space-y-4">
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700">Current Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordData.currentPassword}
                    onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">New Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordData.newPassword}
                    onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordData.confirmPassword}
                    onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                
                <button
                  onClick={handlePasswordSave}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </ProfileSection>
      )}

      {/* Preferences Section */}
      {activeSection === 'preferences' && (
        <ProfileSection title="Preferences" icon={Bell} sectionKey="preferences">
          <div className="space-y-8">
            {/* Notification Preferences */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Notification Settings</span>
              </h4>
              <div className="bg-gray-50 p-4 rounded-xl space-y-3">
                <ToggleSwitch
                  label="Email Notifications"
                  checked={formData.preferences.notifications.email}
                  onChange={(value) => handleInputChange('notifications', 'email', value)}
                />
                <ToggleSwitch
                  label="SMS Notifications"
                  checked={formData.preferences.notifications.sms}
                  onChange={(value) => handleInputChange('notifications', 'sms', value)}
                />
                <ToggleSwitch
                  label="Push Notifications"
                  checked={formData.preferences.notifications.push}
                  onChange={(value) => handleInputChange('notifications', 'push', value)}
                />
                <ToggleSwitch
                  label="Deadline Reminders"
                  checked={formData.preferences.notifications.deadlineReminders}
                  onChange={(value) => handleInputChange('notifications', 'deadlineReminders', value)}
                />
                <ToggleSwitch
                  label="Application Updates"
                  checked={formData.preferences.notifications.applicationUpdates}
                  onChange={(value) => handleInputChange('notifications', 'applicationUpdates', value)}
                />
              </div>
            </div>

            {/* Privacy Settings */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Privacy Settings</span>
              </h4>
              <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Profile Visibility</label>
                  <select
                    value={formData.preferences.privacy.profileVisibility}
                    onChange={(e) => handleInputChange('privacy', 'profileVisibility', e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="friends">Friends Only</option>
                  </select>
                </div>
                <ToggleSwitch
                  label="Show Contact Information"
                  checked={formData.preferences.privacy.contactInfoVisible}
                  onChange={(value) => handleInputChange('privacy', 'contactInfoVisible', value)}
                />
                <ToggleSwitch
                  label="Show Academic Information"
                  checked={formData.preferences.privacy.academicInfoVisible}
                  onChange={(value) => handleInputChange('privacy', 'academicInfoVisible', value)}
                />
              </div>
            </div>

            {/* General Preferences */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>General Settings</span>
              </h4>
              <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Language</label>
                    <select
                      value={formData.preferences.language}
                      onChange={(e) => handleInputChange('preferences', 'language', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Timezone</label>
                    <select
                      value={formData.preferences.timezone}
                      onChange={(e) => handleInputChange('preferences', 'timezone', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="America/New_York">Eastern Time</option>
                      <option value="America/Chicago">Central Time</option>
                      <option value="America/Denver">Mountain Time</option>
                      <option value="America/Los_Angeles">Pacific Time</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ProfileSection>
      )}
    </div>
  );
};

export default ProfileComponent; 