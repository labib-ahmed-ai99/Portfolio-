import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Github,
  Info,
  Instagram,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { SOCIAL_LINKS, UI_STRINGS } from '../data/portfolioData';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'sent' | 'unconfigured' | 'error';

const INITIAL_VALUES: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const { language, t } = useLanguage();
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [showSetupGuide, setShowSetupGuide] = useState(false);

  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() || '';
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() || '';
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() || '';
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() || '';

  const hasEmailJsConfig = Boolean(
    emailjsServiceId && emailjsTemplateId && emailjsPublicKey
  );
  const isBackendConfigured = Boolean(formspreeEndpoint) || hasEmailJsConfig;

  const validate = (fields: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (fields.name.trim().length < 2) {
      nextErrors.name = t(UI_STRINGS.errNameRequired);
    }
    if (!fields.email.trim()) {
      nextErrors.email = t(UI_STRINGS.errEmailRequired);
    } else if (!EMAIL_REGEX.test(fields.email.trim())) {
      nextErrors.email = t(UI_STRINGS.errEmailInvalid);
    }
    if (fields.subject.trim().length < 3) {
      nextErrors.subject = t(UI_STRINGS.errSubjectRequired);
    }
    if (fields.message.trim().length < 10) {
      nextErrors.message = t(UI_STRINGS.errMessageRequired);
    }
    return nextErrors;
  };

  const handleChange = (
    field: keyof FormValues,
    value: string
  ) => {
    const updated = { ...values, [field]: value };
    setValues(updated);
    if (errors[field]) {
      const revalidated = validate(updated);
      setErrors((prev) => ({ ...prev, [field]: revalidated[field] }));
    }
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Never pretend messages were delivered if no backend endpoint is configured
    if (!isBackendConfigured) {
      setStatus('unconfigured');
      return;
    }

    setStatus('submitting');

    try {
      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            subject: values.subject.trim(),
            message: values.message.trim(),
          }),
        });

        if (!response.ok) {
          throw new Error('Formspree request failed');
        }
      } else if (hasEmailJsConfig) {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: emailjsServiceId,
            template_id: emailjsTemplateId,
            user_id: emailjsPublicKey,
            template_params: {
              from_name: values.name.trim(),
              reply_to: values.email.trim(),
              subject: values.subject.trim(),
              message: values.message.trim(),
            },
          }),
        });

        if (!response.ok) {
          throw new Error('EmailJS request failed');
        }
      }

      setStatus('sent');
      setValues(INITIAL_VALUES);
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setStatus('idle');
  };

  return (
    <section id="contact" className="bg-[#0A0F1E] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-medium text-blue-400">
            {t(UI_STRINGS.contactEyebrow)}
          </p>
          <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
            {t(UI_STRINGS.contactHeading)}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {t(UI_STRINGS.contactLead)}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Privacy Notice, Social Links & Configuration Guide */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-slate-800/85 bg-[#0F172A]/85 p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-base font-semibold text-slate-100">
                      {t(UI_STRINGS.privacyNoteTitle)}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      {t(UI_STRINGS.privacyNoteBody)}
                    </p>
                  </div>
                </div>

                {/* Expandable Formspree / EmailJS Setup Guide */}
                <div className="mt-4 border-t border-slate-800/80 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowSetupGuide((prev) => !prev)}
                    aria-expanded={showSetupGuide}
                    className="flex w-full items-center justify-between text-left text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    <span>{t(UI_STRINGS.setupGuideToggle)}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-150 ${
                        showSetupGuide ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {showSetupGuide && (
                    <div className="mt-3 space-y-2.5 text-xs leading-relaxed text-slate-300">
                      <p>
                        {language === 'en'
                          ? '1. Formspree (easiest): Create a free form at formspree.io pointing to your private email, then set VITE_FORMSPREE_ENDPOINT in your .env file or hosting dashboard.'
                          : '১. Formspree (সবচেয়ে সহজ): formspree.io-তে আপনার ব্যক্তিগত ইমেইল যুক্ত করে একটি ফর্ম তৈরি করুন এবং .env বা হোস্টিং ড্যাশবোর্ডে VITE_FORMSPREE_ENDPOINT যোগ করুন।'}
                      </p>
                      <p>
                        {language === 'en'
                          ? '2. EmailJS (alternative): Create a service & template at emailjs.com, then set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.'
                          : '২. EmailJS (বিকল্প): emailjs.com-এ সার্ভিস ও টেমপ্লেট তৈরি করে VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID এবং VITE_EMAILJS_PUBLIC_KEY সেট করুন।'}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/85 bg-[#0F172A]/85 p-6">
                <h3 className="font-display text-base font-semibold text-slate-100">
                  {t(UI_STRINGS.socialProfilesLabel)}
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center justify-between rounded-xl border border-slate-800 bg-[#060913]/85 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <Github className="h-4 w-4 text-blue-400" aria-hidden="true" />
                      <span>GitHub · labib-ahmed-ai99</span>
                    </span>
                    <ExternalLink className="h-4 w-4 text-slate-500" aria-hidden="true" />
                  </a>

                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center justify-between rounded-xl border border-slate-800 bg-[#060913]/85 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-purple-500/50 hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <Instagram className="h-4 w-4 text-purple-400" aria-hidden="true" />
                      <span>Instagram · @labibahmed909</span>
                    </span>
                    <ExternalLink className="h-4 w-4 text-slate-500" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Validated Contact Form */}
            <div className="lg:col-span-7">
              <form
                noValidate
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-800/85 bg-[#0B1120] p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-200"
                    >
                      {t(UI_STRINGS.formNameLabel)}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder={t(UI_STRINGS.formNamePlaceholder)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className="mt-2 w-full rounded-lg border border-slate-800 bg-[#060913] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1.5 text-xs text-rose-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-200"
                    >
                      {t(UI_STRINGS.formEmailLabel)}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder={t(UI_STRINGS.formEmailPlaceholder)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className="mt-2 w-full rounded-lg border border-slate-800 bg-[#060913] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1.5 text-xs text-rose-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-slate-200"
                  >
                    {t(UI_STRINGS.formSubjectLabel)}
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={values.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    placeholder={t(UI_STRINGS.formSubjectPlaceholder)}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                    className="mt-2 w-full rounded-lg border border-slate-800 bg-[#060913] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.subject && (
                    <p id="contact-subject-error" className="mt-1.5 text-xs text-rose-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-200"
                  >
                    {t(UI_STRINGS.formMessageLabel)}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder={t(UI_STRINGS.formMessagePlaceholder)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className="mt-2 w-full resize-y rounded-lg border border-slate-800 bg-[#060913] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="mt-1.5 text-xs text-rose-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Live Feedback Banners */}
                <div aria-live="polite" className="mt-5">
                  {status === 'sent' && (
                    <div className="flex items-start gap-3 rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-4 text-xs leading-relaxed text-emerald-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                      <div>
                        <p className="font-semibold">{t(UI_STRINGS.formSuccessTitle)}</p>
                        <p className="mt-1 text-emerald-200/85">{t(UI_STRINGS.formSuccessBody)}</p>
                      </div>
                    </div>
                  )}

                  {status === 'unconfigured' && (
                    <div className="flex items-start gap-3 rounded-xl border border-blue-500/40 bg-blue-950/30 p-4 text-xs leading-relaxed text-blue-100">
                      <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                      <div>
                        <p className="font-semibold">{t(UI_STRINGS.formUnconfiguredTitle)}</p>
                        <p className="mt-1 text-blue-100/85">{t(UI_STRINGS.formUnconfiguredBody)}</p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-start gap-3 rounded-xl border border-rose-500/40 bg-rose-950/30 p-4 text-xs leading-relaxed text-rose-200">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" aria-hidden="true" />
                      <div>
                        <p className="font-semibold">{t(UI_STRINGS.formErrorTitle)}</p>
                        <p className="mt-1 text-rose-200/85">{t(UI_STRINGS.formErrorBody)}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:opacity-60 whitespace-nowrap"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>
                      {status === 'submitting'
                        ? t(UI_STRINGS.formSubmitting)
                        : t(UI_STRINGS.formSubmit)}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex min-h-[44px] items-center rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-slate-700 hover:text-white whitespace-nowrap"
                  >
                    {t(UI_STRINGS.formReset)}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
