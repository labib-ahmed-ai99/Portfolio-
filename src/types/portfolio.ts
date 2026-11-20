export type Language = 'en' | 'bn';

export interface LocalizedText {
  en: string;
  bn: string;
}

export type SectionId =
  | 'home'
  | 'about'
  | 'education'
  | 'skills'
  | 'projects'
  | 'achievements'
  | 'interests'
  | 'goals'
  | 'contact';

export interface NavItem {
  id: SectionId;
  label: LocalizedText;
  description?: LocalizedText;
}

export interface EducationItem {
  id: string;
  periodLabel: LocalizedText;
  institution: LocalizedText;
  status: LocalizedText;
  details: LocalizedText[];
}

export interface TechnicalSkillItem {
  id: string;
  name: LocalizedText;
  level: LocalizedText;
  summary: LocalizedText;
}

export type ProjectCategory = 'python' | 'html';
export type ProjectStatus = 'completed' | 'in-progress';
export type ProjectFilter = 'all' | 'completed' | 'in-progress' | 'python' | 'html';

export interface ProjectItem {
  id: string;
  title: LocalizedText;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  summary: LocalizedText;
  details: LocalizedText;
  learningFocus: LocalizedText;
  /** Optional public GitHub repository URL. Leave undefined if not yet published. */
  githubUrl?: string;
  /** Optional live preview URL. Leave undefined if no hosted demo exists yet. */
  liveUrl?: string;
  /** Optional screenshot path (e.g. "/images/project.png"). Leave undefined to display an honest placeholder. */
  imageUrl?: string;
}

export interface AchievementItem {
  id: string;
  year: LocalizedText;
  title: LocalizedText;
  context: LocalizedText;
  summary: LocalizedText;
}

export interface InterestItem {
  id: string;
  iconName: 'brain' | 'cpu' | 'globe';
  title: LocalizedText;
  description: LocalizedText;
}

export interface LearningGoalItem {
  id: string;
  topic: LocalizedText;
  status: LocalizedText;
  focusArea: LocalizedText;
}

export interface SpokenLanguageItem {
  id: string;
  name: LocalizedText;
  proficiency: LocalizedText;
  note: LocalizedText;
}

export interface GoalVisionItem {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}
