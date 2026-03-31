export type TopicStatus = 'not_started' | 'in_progress' | 'completed';

export interface Topic {
  id: string;
  name: string;
  status: TopicStatus;
  isCritical?: boolean;
}

export interface Chapter {
  id: string;
  name: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  name: string;
  emoji: string;
  chapters: Chapter[];
  round: 1 | 2;
}

export interface DailyTask {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface AppState {
  progress: Record<string, TopicStatus>; // topicId -> status
  notes: Record<string, string>; // topicId -> note
  lastCompletedDate: string; // YYYY-MM-DD
  completedTodayCount: number;
  currentWeek: number;
  dailyTasks: DailyTask[];
}

export interface WeeklyPlan {
  week: number;
  topics: string[]; // topicIds
}
