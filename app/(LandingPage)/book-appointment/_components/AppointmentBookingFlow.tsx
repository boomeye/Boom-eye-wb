'use client'

import React, { useState } from 'react';
import { Check, X, ChevronLeft, MoveLeft } from 'lucide-react';

const DATABASE_PHONE = '08144144121';

const AppointmentBookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<{
    isReturning: boolean | null,
    phoneNumber: string,
    appointmentReason: string
  }>({
    isReturning: null,
    phoneNumber: '',
    appointmentReason: ''
  });
  const [showVerificationSuccess, setShowVerificationSuccess] = useState(false);
  const [showAppointmentSuccess, setShowAppointmentSuccess] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'success' | 'fail' | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    title: '',
    firstName: '',
    surname: '',
    phone: '',
    email: '',
    reason: '',
  });
  const [registerErrors, setRegisterErrors] = useState<any>({});
  const [registerSubmitted, setRegisterSubmitted] = useState(false);

  const steps = [
    { number: 1, title: 'Patient Type', subtitle: 'Returning or New?' },
    { number: 2, title: 'Verify Account', subtitle: 'Verify Phone/Account Information' },
    { number: 3, title: 'Schedule Appointment', subtitle: 'Schedule an Appointment' },
    { number: 4, title: 'Completed', subtitle: 'Appointment Scheduled' }
  ];

  const handlePatientTypeSelection = (isReturning: boolean) => {
    setFormData({ ...formData, isReturning });
    if (isReturning) {
      setCurrentStep(2);
    } else {
      setCurrentStep(3);
    }
  };

  const validatePhone = (value: string) => {
    if (!/^[0-9]{11}$/.test(value)) {
      return 'Phone number must be exactly 11 digits.';
    }
    return null;
  };

  const validateEmail = (value: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address.';
    }
    return null;
  };

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, phoneNumber: value });
    setPhoneError(validatePhone(value));
  };

  const handlePhoneVerification = () => {
    if (phoneError || !formData.phoneNumber) return;
    if (formData.phoneNumber === DATABASE_PHONE) {
      setVerificationResult('success');
      setShowVerificationSuccess(true);
    } else {
      setVerificationResult('fail');
      setShowVerificationSuccess(true);
    }
  };

  const handleVerificationContinue = () => {
    setShowVerificationSuccess(false);
    setVerificationResult(null);
    if (verificationResult === 'fail') {
      setShowRegisterForm(true);
    } else {
      setShowRegisterForm(false);
    }
    setCurrentStep(3);
  };

  const validateRegisterForm = () => {
    const errors: any = {};
    if (!registerForm.title.trim()) errors.title = 'Title is required.';
    if (!registerForm.firstName.trim()) errors.firstName = 'First name is required.';
    if (!registerForm.surname.trim()) errors.surname = 'Surname is required.';
    if (!registerForm.phone.trim() || validatePhone(registerForm.phone)) errors.phone = 'Phone number must be exactly 11 digits.';
    if (!registerForm.email.trim() || validateEmail(registerForm.email)) errors.email = 'Please enter a valid email address.';
    if (!registerForm.reason.trim()) errors.reason = 'Reason is required.';
    return errors;
  };

  const handleRegisterInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    setRegisterErrors({ ...registerErrors, [e.target.name]: undefined });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateRegisterForm();
    setRegisterErrors(errors);
    setRegisterSubmitted(true);
    if (Object.keys(errors).length === 0) {
      // Simulate successful registration/booking
      setShowAppointmentSuccess(true);
      setTimeout(() => {
        setCurrentStep(4);
        setShowAppointmentSuccess(false);
      }, 2000);
    }
  };

  const handleAppointmentSubmit = () => {
    if (formData.appointmentReason.trim()) {
      setShowAppointmentSuccess(true);
      setTimeout(() => {
        setCurrentStep(4);
        setShowAppointmentSuccess(false);
      }, 2000);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setShowVerificationSuccess(false);
      setShowAppointmentSuccess(false);
      setShowRegisterForm(false);
    }
  };

  const closeVerificationAlert = () => {
    setShowVerificationSuccess(false);
    setVerificationResult(null);
  };

  const renderStepIndicator = () => (
    <div className="w-full lg:w-[220px] xl:w-[492px] bg-[#6B9BB5] text-white px-4 sm:px-6 xl:px-[109px] py-6 sm:py-10 xl:py-[147px] rounded-l-none relative flex flex-col items-center">
      <div className="space-y-0 w-full relative">
        {steps.map((step, idx) => (
          <div key={step.number} className="flex items-start space-x-4 relative">
            <div className="relative flex flex-col items-center">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-base sm:text-[20px] font-[700] border-2 border-dashed
                ${currentStep === step.number 
                  ? 'bg-[#0A0A23] border-none text-white' 
                  : currentStep > step.number 
                    ? 'border-[#C8E8F6] text-[#C8E8F6]'
                    : 'border-[#C8E8F6] text-[#C8E8F6]'
                }`}>
                {currentStep > step.number ? <Check size={16} /> : step.number}
              </div>
              {/* Vertical line below except for last step */}
              {idx < steps.length  && (
                <div className="w-px h-8 sm:h-12 bg-transparent flex justify-center">
                  <div className="h-full border-l-2 border-dashed border-[#C8E8F6] mx-auto"></div>
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className={`font-bold mb-[4px] text-sm sm:text-base xl:text-lg ${currentStep >= step.number ? 'text-white' : 'text-[#4A7181]'}`}>{step.title}</h3>
              <p className={`text-xs font-[400] ${currentStep >= step.number ? 'text-[#C8E8F6]' : 'text-[#C8E8F6]'}`}>{step.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPatientTypeStep = () => (
    <div className="text-center">
      <p className="text-orange-500 text-[24px] font-medium mb-2">Ready to Visit?</p>
      <h1 className="text-[48px] font-bold text-slate-800 mb-8">Book Here!</h1>
      
      <h2 className="text-xl font-semibold text-slate-600 mb-2">Have You Visited Our Clinic Before?</h2>
      <p className="text-slate-500 mb-12">This is to ensure you are not registered twice.</p>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Yes option */}
        <button
          onClick={() => handlePatientTypeSelection(true)}
          className="p-8 border-2 border-dashed flex items-center space-x-[16px] border-slate-300 rounded-lg hover:border-none hover:bg-[#0A0A23] transition-all duration-200 group"
        >
          <Check className="text-green-600 group-hover:text-white" size={48} />
          <div className='text-left'>
            <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-white">Yes</h3>
            <p className="text-slate-600 group-hover:text-white">I have visited your clinic before</p>
          </div>
        </button>
        {/* No option */}
        <button
          onClick={() => handlePatientTypeSelection(false)}
          className="p-8 border-2 border-dashed flex items-center space-x-[16px] border-slate-300 rounded-lg hover:border-none hover:bg-[#0A0A23] transition-all duration-200 group"
        >
          <X className="text-red-600 group-hover:text-white" size={48} />
          <div className='text-left'>
            <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-white">No</h3>
            <p className="text-slate-600 group-hover:text-white">This will be my first time</p>
          </div>
        </button>
      </div>
    </div>
  );

  const renderPhoneVerificationStep = () => (
    <div className="text-center">
      <p className="text-[#FF9500] text-[24px] font-semibold mb-2">Ready to Visit?</p>
      <h1 className="text-[48px] font-extrabold text-[#0A0A23] mb-4">Book Here!</h1>
      <h2 className="text-xl md:text-2xl font-bold text-[#395763] mb-1">Verify Phone Number</h2>
      <p className="text-[#395763] text-sm md:text-base mb-10">Please Enter Your Phone Number below to Confirm Your Account Information</p>
      <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-8" onSubmit={e => e.preventDefault()}>
        <input
          type="tel"
          placeholder="Enter here"
          value={formData.phoneNumber}
          onChange={handlePhoneInputChange}
          className={`flex-1 w-full md:w-auto px-4 py-3 border ${phoneError ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A23] text-base`}
        />
        <button
          type="button"
          onClick={handlePhoneVerification}
          disabled={!!phoneError || !formData.phoneNumber}
          className="w-full md:w-auto bg-[#0A0A23] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#23233a] disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors text-base"
        >
          Verify
        </button>
      </form>
      {phoneError && (
        <div className="text-red-600 text-sm mb-4">{phoneError}</div>
      )}
      {showVerificationSuccess && verificationResult === 'success' && (
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-start bg-white border border-green-200 rounded-lg shadow-sm p-4 relative">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-green-500 rounded-l-lg" />
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-lg bg-green-100 border border-green-200 mr-4 ml-4">
              <Check className="text-green-600" size={24} />
            </div>
            <div className="flex-1 text-left">
              <div className="font-bold text-green-700 mb-1">Verification Successful</div>
              <div className="text-[#0A0A23] text-sm md:text-base">
                Records are Found With This Phone Number - {formData.phoneNumber} In Our Database
              </div>
            </div>
            <button onClick={closeVerificationAlert} className="absolute top-3 right-3 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
          </div>
        </div>
      )}
      {showVerificationSuccess && verificationResult === 'fail' && (
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-start bg-[#FDECEC] border border-red-200 rounded-lg shadow-sm p-4 relative">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-500 rounded-l-lg" />
            <div className="flex items-center mr-4 ml-4">
              <span className="w-[32px] h-[32px] flex items-start justify-center rounded-lg bg-white border border-red-200">
                <span className="text-red-500 text-lg font-bold">?</span>
              </span>
            </div>
            <div className="flex-1 text-left">
              <div className="font-bold text-red-600 mb-1">Verification Failed</div>
              <div className="text-[#0A0A23] text-sm md:text-base">
                No Records Found With This Phone Number - {formData.phoneNumber} In Our Database.<br />
                <span className="block mt-1">You Can Try Another Phone Number or Click "Continue" And Proceed To Register And Schedule An Appointment.</span>
              </div>
            </div>
            <button onClick={closeVerificationAlert} className="absolute top-3 right-3 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-between mt-12">
        <button
          onClick={handlePrevious}
          className="flex items-center space-x-2 border-2 border-[#0A0A23] text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <MoveLeft size={16} className='text-[#0A0A23]' />
          <span>Previous</span>
        </button>
        <button
          onClick={handleVerificationContinue}
          className="bg-[#0A0A23] text-white py-2 px-6 rounded-lg hover:bg-[#23233a] transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderAppointmentStep = () => {
    if (showRegisterForm) {
      return (
        <div className="text-center">
          <p className="text-[#FF9500] text-[24px] font-semibold mb-2">Ready to Visit?</p>
          <h1 className="text-[48px] font-extrabold text-[#0A0A23] mb-4">Book Here!</h1>
          <h2 className="text-xl md:text-2xl font-bold text-[#395763] mb-1">Verify Phone Number</h2>
          <p className="text-[#395763] text-sm md:text-base mb-10">Please Enter Your Phone Number below to Confirm Your Account Information</p>
          <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-left" onSubmit={handleRegisterSubmit}>
            <div>
              <input
                name="title"
                placeholder="Enter your title e.g Mr, Mrs, or Miss"
                value={registerForm.title}
                onChange={handleRegisterInputChange}
                className={`w-full px-4 py-3 border ${registerErrors.title ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A23] text-base mb-1 bg-[#F3FAFD]`}
              />
              {registerErrors.title && <div className="text-red-600 text-xs mb-1">{registerErrors.title}</div>}
            </div>
            <div>
              <input
                name="firstName"
                placeholder="Enter your first name"
                value={registerForm.firstName}
                onChange={handleRegisterInputChange}
                className={`w-full px-4 py-3 border ${registerErrors.firstName ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A23] text-base mb-1 bg-[#F3FAFD]`}
              />
              {registerErrors.firstName && <div className="text-red-600 text-xs mb-1">{registerErrors.firstName}</div>}
            </div>
            <div>
              <input
                name="surname"
                placeholder="Enter your surname"
                value={registerForm.surname}
                onChange={handleRegisterInputChange}
                className={`w-full px-4 py-3 border ${registerErrors.surname ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A23] text-base mb-1 bg-[#F3FAFD]`}
              />
              {registerErrors.surname && <div className="text-red-600 text-xs mb-1">{registerErrors.surname}</div>}
            </div>
            <div>
              <input
                name="phone"
                placeholder="Enter your phone number"
                value={registerForm.phone}
                onChange={handleRegisterInputChange}
                className={`w-full px-4 py-3 border ${registerErrors.phone ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A23] text-base mb-1 bg-[#F3FAFD]`}
              />
              {registerErrors.phone && <div className="text-red-600 text-xs mb-1">{registerErrors.phone}</div>}
            </div>
            <div className="md:col-span-2">
              <input
                name="email"
                placeholder="Enter your email"
                value={registerForm.email}
                onChange={handleRegisterInputChange}
                className={`w-full px-4 py-3 border ${registerErrors.email ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A23] text-base mb-1 bg-[#F3FAFD]`}
              />
              {registerErrors.email && <div className="text-red-600 text-xs mb-1">{registerErrors.email}</div>}
            </div>
            <div className="md:col-span-2">
              <textarea
                name="reason"
                placeholder="What is your reason for this appointment?"
                value={registerForm.reason}
                onChange={handleRegisterInputChange}
                rows={3}
                className={`w-full px-4 py-3 border ${registerErrors.reason ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A23] text-base mb-1 bg-[#F3FAFD] resize-none`}
              />
              {registerErrors.reason && <div className="text-red-600 text-xs mb-1">{registerErrors.reason}</div>}
            </div>
            <div className="md:col-span-2 flex justify-between mt-6">
              <button
                type="button"
                onClick={handlePrevious}
                className="flex items-center space-x-2 border-2 border-[#0A0A23] text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <MoveLeft size={16} className='text-[#0A0A23]' />
                <span>Previous</span>
              </button>
              <button
                type="submit"
                className="bg-[#0A0A23] text-white py-2 px-6 rounded-lg hover:bg-[#23233a] transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    }
    return (
      <div className="text-center">
        <p className="text-orange-500 text-[24px] font-medium mb-2">Ready to Visit?</p>
        <h1 className="text-[48px] font-bold text-slate-800 mb-8">Book Here!</h1>
        
        <h2 className="text-xl font-semibold text-slate-600 mb-2">Verify Phone Number</h2>
        <p className="text-slate-500 mb-12">Please Enter Your Phone Number below to Confirm Your Account Information</p>
        
        <div className="max-w-md mx-auto space-y-6">
          <textarea
            placeholder="What is your reason for this appointment?"
            value={formData.appointmentReason}
            onChange={(e) => setFormData({ ...formData, appointmentReason: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 resize-none"
          />
        </div>
        
        {showAppointmentSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md mx-4 relative">
              <button
                onClick={() => setShowAppointmentSuccess(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <X size={20} />
              </button>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="text-green-600" size={16} />
                </div>
                <h3 className="text-lg font-semibold text-green-600">Your Appointment Has Been Successfully Booked!</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Check Your Email for Booking Your Appointment details
              </p>
            </div>
          </div>
        )}
        
        <div className="flex justify-between mt-12">
        <button
            onClick={handlePrevious}
            className="flex items-center space-x-2 border-2 border-[#0A0A23] text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <MoveLeft size={16} className='text-[#0A0A23]' />
            <span>Previous</span>
          </button>
          <button
            onClick={handleAppointmentSubmit}
            disabled={!formData.appointmentReason.trim()}
            className="bg-slate-800 text-white py-2 px-6 rounded-lg hover:bg-slate-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

  const renderCompletedStep = () => (
    <div className="flex justify-center items-center min-h-[120px]">
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex items-start bg-white border border-green-200 rounded-lg shadow-sm p-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-green-700 rounded-l-lg" />
          <div className="w-[32px] h-[32px] flex items-center justify-center rounded-lg bg-green-100 border border-green-200 mr-4 ml-4">
            <Check className="text-green-700" size={24} />
          </div>
          <div className="flex-1 text-left">
            <div className="font-bold text-green-700 mb-1 text-lg md:text-xl">Your Appointment Has Been Successfully Booked!</div>
            <div className="text-[#0A0A23] text-sm md:text-base">Thank You For Booking Your Appointment With Us.</div>
          </div>
          <button onClick={() => setCurrentStep(1)} className="absolute top-3 right-3 text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#F3FAFD] max-w-[120rem] mx-auto flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-col-reverse lg:flex-row">
        <div className="flex-1 p-4 sm:p-8 xl:p-12 flex items-center justify-center">
          <div className="w-full max-w-4xl">
            {currentStep === 1 && renderPatientTypeStep()}
            {currentStep === 2 && renderPhoneVerificationStep()}
            {currentStep === 3 && renderAppointmentStep()}
            {currentStep === 4 && renderCompletedStep()}
          </div>
        </div>
        {renderStepIndicator()}
      </div>
    </div>
  );
};

export default AppointmentBookingFlow;