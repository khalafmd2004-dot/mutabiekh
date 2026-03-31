import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Trophy, 
  Target, 
  Calendar,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  FileText,
  Layout,
  ListTodo,
  AlertCircle,
  StickyNote,
  Download,
  BookOpen,
  Settings
} from 'lucide-react';
import { INITIAL_SUBJECTS, MOTIVATIONAL_MESSAGES, STUDY_PLANS, WEEKLY_PLAN } from './constants';
import { TopicStatus, Subject, Topic, DailyTask } from './types';

export default function App() {
  const [activeRound, setActiveRound] = useState<1 | 2>(1);
  const [activeTab, setActiveTab] = useState<'subjects' | 'weekly'>('weekly');
  const [currentWeek, setCurrentWeek] = useState(1);
  const [dailyTasks, setDailyTasks] = useState<DailyTask[]>(() => {
    const saved = localStorage.getItem('daily_tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTaskText, setNewTaskText] = useState('');
  const [notes, setNotes] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('study_notes');
    return saved ? JSON.parse(saved) : {};
  });

  const [progress, setProgress] = useState<Record<string, TopicStatus>>(() => {
    const saved = localStorage.getItem('study_progress');
    const initial: Record<string, TopicStatus> = {};
    INITIAL_SUBJECTS.forEach(subject => {
      subject.chapters.forEach(chapter => {
        chapter.topics.forEach(topic => {
          initial[topic.id] = topic.status;
        });
      });
    });

    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...initial, ...parsed };
    }
    
    return initial;
  });

  const [dailyStats, setDailyStats] = useState(() => {
    const saved = localStorage.getItem('daily_stats');
    const today = new Date().toISOString().split('T')[0];
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.date === today) return parsed;
    }
    return { date: today, completed: 0 };
  });

  const [focusMode, setFocusMode] = useState<{
    topicId: string;
    timeLeft: number;
    isActive: boolean;
    isBreak: boolean;
  } | null>(null);

  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    localStorage.setItem('study_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('study_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('daily_stats', JSON.stringify(dailyStats));
  }, [dailyStats]);

  useEffect(() => {
    localStorage.setItem('daily_tasks', JSON.stringify(dailyTasks));
  }, [dailyTasks]);

  // Focus Mode Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (focusMode?.isActive && focusMode.timeLeft > 0) {
      interval = setInterval(() => {
        setFocusMode(prev => prev ? { ...prev, timeLeft: prev.timeLeft - 1 } : null);
      }, 1000);
    } else if (focusMode?.isActive && focusMode.timeLeft === 0) {
      // Switch between study and break
      const nextIsBreak = !focusMode.isBreak;
      setFocusMode(prev => prev ? {
        ...prev,
        isBreak: nextIsBreak,
        timeLeft: nextIsBreak ? 5 * 60 : 25 * 60,
        isActive: false // Pause on switch
      } : null);
      
      // Notification
      if (Notification.permission === "granted") {
        new Notification(nextIsBreak ? "وقت الاستراحة!" : "وقت الدراسة!");
      }
    }
    return () => clearInterval(interval);
  }, [focusMode?.isActive, focusMode?.timeLeft, focusMode?.isBreak]);

  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<string | null>(null);

  const confirmReset = () => {
    const initial: Record<string, TopicStatus> = {};
    INITIAL_SUBJECTS.forEach(subject => {
      subject.chapters.forEach(chapter => {
        chapter.topics.forEach(topic => {
          initial[topic.id] = topic.status;
        });
      });
    });
    setProgress(initial);
    setNotes({});
    setDailyStats({ date: new Date().toISOString().split('T')[0], completed: 0 });
    localStorage.setItem('study_progress', JSON.stringify(initial));
    localStorage.setItem('study_notes', JSON.stringify({}));
    localStorage.setItem('daily_stats', JSON.stringify({ date: new Date().toISOString().split('T')[0], completed: 0 }));
    setShowResetConfirm(false);
  };

  const toggleSubject = (id: string) => {
    setExpandedSubjects(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const addDailyTask = () => {
    if (!newTaskText.trim()) return;
    const newTask: DailyTask = {
      id: Date.now().toString(),
      text: newTaskText.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    setDailyTasks(prev => [newTask, ...prev]);
    setNewTaskText('');
  };

  const toggleDailyTask = (id: string) => {
    setDailyTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteDailyTask = (id: string) => {
    setDailyTasks(prev => prev.filter(task => task.id !== id));
  };

  const currentSubjects = useMemo(() => 
    INITIAL_SUBJECTS.filter(s => s.round === activeRound), 
  [activeRound]);

  const stats = useMemo(() => {
    let totalTopics = 0;
    let completedTopics = 0;
    let inProgressTopics = 0;

    currentSubjects.forEach(subject => {
      subject.chapters.forEach(chapter => {
        chapter.topics.forEach(topic => {
          totalTopics++;
          const status = progress[topic.id] || 'not_started';
          if (status === 'completed') completedTopics++;
          if (status === 'in_progress') inProgressTopics++;
        });
      });
    });

    const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    const remaining = totalTopics - completedTopics;

    return { totalTopics, completedTopics, inProgressTopics, percentage, remaining };
  }, [currentSubjects, progress]);

  const getSubjectProgress = (subject: Subject) => {
    let total = 0;
    let completed = 0;
    subject.chapters.forEach(c => {
      c.topics.forEach(t => {
        total++;
        if (progress[t.id] === 'completed') completed++;
      });
    });
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  const cycleStatus = (topicId: string) => {
    const statuses: TopicStatus[] = ['not_started', 'in_progress', 'completed'];
    const currentStatus = progress[topicId] || 'not_started';
    const currentIndex = statuses.indexOf(currentStatus);
    const nextStatus = statuses[(currentIndex + 1) % statuses.length];
    
    setProgress(prev => ({ ...prev, [topicId]: nextStatus }));

    if (nextStatus === 'completed') {
      const today = new Date().toISOString().split('T')[0];
      setDailyStats(prev => ({
        date: today,
        completed: prev.date === today ? prev.completed + 1 : 1
      }));

      const randomMsg = MOTIVATIONAL_MESSAGES[Math.floor(Math.random() * MOTIVATIONAL_MESSAGES.length)];
      setToast(randomMsg);
      setTimeout(() => setToast(null), 2000);
    }
  };

  const updateNote = (topicId: string, note: string) => {
    setNotes(prev => ({ ...prev, [topicId]: note }));
  };

  const startFocus = (topicId: string) => {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
    setFocusMode({
      topicId,
      timeLeft: 25 * 60,
      isActive: true,
      isBreak: false
    });
  };

  const exportProgress = () => {
    let text = "تقرير تقدم الدراسة - السادس العلمي\n";
    text += "================================\n\n";
    
    INITIAL_SUBJECTS.forEach(subject => {
      text += `${subject.emoji} ${subject.name} (الدور ${subject.round})\n`;
      subject.chapters.forEach(chapter => {
        text += `  - ${chapter.name}\n`;
        chapter.topics.forEach(topic => {
          const status = progress[topic.id] === 'completed' ? '✅' : progress[topic.id] === 'in_progress' ? '⏳' : '❌';
          text += `    [${status}] ${topic.name}\n`;
          if (notes[topic.id]) text += `      ملاحظة: ${notes[topic.id]}\n`;
        });
      });
      text += "\n";
    });

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'study_progress.txt';
    link.click();
  };

  const allTopics = useMemo(() => {
    const map: Record<string, { topic: Topic, subject: Subject }> = {};
    INITIAL_SUBJECTS.forEach(s => s.chapters.forEach(c => c.topics.forEach(t => map[t.id] = { topic: t, subject: s })));
    return map;
  }, []);

  const isWeekDelayed = (weekNum: number) => {
    if (weekNum >= currentWeek) return false;
    const weekData = WEEKLY_PLAN.find(w => w.week === weekNum);
    if (!weekData) return false;
    return weekData.topics.some(tid => progress[tid] !== 'completed');
  };

  const suggestedDailyGoal = useMemo(() => {
    const daysLeft = activeRound === 1 ? 50 : 120;
    let totalRemaining = 0;
    INITIAL_SUBJECTS.filter(s => s.round === activeRound).forEach(s => 
      s.chapters.forEach(c => c.topics.forEach(t => {
        if (progress[t.id] !== 'completed') totalRemaining++;
      }))
    );
    return Math.ceil(totalRemaining / daysLeft);
  }, [activeRound, progress]);

  const getWeekDateRange = (weekNum: number) => {
    const startDate = new Date('2026-03-31');
    const weekStart = new Date(startDate);
    weekStart.setDate(startDate.getDate() + (weekNum - 1) * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return `${weekStart.toLocaleDateString('ar-EG', options)} - ${weekEnd.toLocaleDateString('ar-EG', options)}`;
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24 font-sans" dir="rtl">
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-navy p-1.5 rounded-lg">
            <Target className="w-5 h-5 text-gold" />
          </div>
          <h1 className="font-extrabold text-navy text-lg">مُتابع السادس</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveRound(1)}
              className={`px-3 py-1 text-[10px] font-bold rounded-lg transition-all ${
                activeRound === 1 ? 'bg-white text-navy shadow-sm' : 'text-gray-400'
              }`}
            >
              الدور 1
            </button>
            <button
              onClick={() => setActiveRound(2)}
              className={`px-3 py-1 text-[10px] font-bold rounded-lg transition-all ${
                activeRound === 2 ? 'bg-white text-navy shadow-sm' : 'text-gray-400'
              }`}
            >
              الدور 2
            </button>
          </div>
          <button 
            onClick={exportProgress}
            className="p-2 text-navy hover:bg-gray-100 rounded-xl transition-colors"
            title="تصدير التقرير"
          >
            <Download className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setShowResetConfirm(true)}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
            title="تصفير التقدم"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      <AnimatePresence>
        {showResetConfirm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResetConfirm(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 shadow-2xl relative z-10 max-w-xs w-full text-center"
            >
              <Target className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">تصفير التقدم؟</h3>
              <p className="text-gray-500 text-sm mb-6">هل أنت متأكد من مسح كل التقدم المحفوظ؟ لا يمكن التراجع عن هذا الإجراء.</p>
              <div className="flex gap-3">
                <button 
                  onClick={confirmReset}
                  className="flex-1 bg-red-500 text-white py-2 rounded-xl font-bold hover:bg-red-600 transition-colors"
                >
                  نعم، صفر
                </button>
                <button 
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 bg-gray-100 text-gray-600 py-2 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-2xl mx-auto px-4 mt-6">
        {activeTab === 'subjects' ? (
          <>
            {/* Subjects List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-navy">المواد الدراسية</h2>
                <span className="text-xs font-bold text-gray-400">الدور {activeRound === 1 ? 'الأول' : 'الثاني'}</span>
              </div>
              {currentSubjects.map((subject) => (
                <div key={subject.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button 
                    onClick={() => toggleSubject(subject.id)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{subject.emoji}</span>
                      <div className="text-right">
                        <h3 className="font-bold text-navy text-lg">{subject.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gold transition-all duration-500" 
                              style={{ width: `${getSubjectProgress(subject)}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-gray-500">{getSubjectProgress(subject)}%</span>
                        </div>
                      </div>
                    </div>
                    {expandedSubjects[subject.id] ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                  </button>

                  <AnimatePresence>
                    {expandedSubjects[subject.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-gray-50 bg-gray-50/30"
                      >
                        <div className="p-4 space-y-6">
                          {subject.chapters.map((chapter) => (
                            <div key={chapter.id}>
                              <h4 className="text-sm font-bold text-gray-400 mb-3 pr-2 border-r-2 border-gold/30">
                                {chapter.name}
                              </h4>
                              <div className="space-y-2">
                                {chapter.topics.map((topic) => (
                                  <TopicItem 
                                    key={topic.id} 
                                    topic={topic} 
                                    status={progress[topic.id] || 'not_started'} 
                                    onToggle={() => cycleStatus(topic.id)}
                                    onFocus={() => startFocus(topic.id)}
                                    note={notes[topic.id] || ''}
                                    onNoteChange={(val) => updateNote(topic.id, val)}
                                  />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Study Plan */}
            <div className="bg-navy text-white p-6 rounded-2xl shadow-xl relative overflow-hidden mb-10">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="w-12 h-12" />
              </div>
              <h3 className="text-gold font-bold text-xl mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                الخطة الدراسية المقترحة
              </h3>
              <div className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
                {activeRound === 1 ? STUDY_PLANS.round1 : STUDY_PLANS.round2}
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-6 mb-10">
            {/* Daily Tasks Section */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gold/20 p-2 rounded-lg">
                  <ListTodo className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-bold text-navy text-lg">المهام اليومية</h3>
                {dailyTasks.length > 0 && (
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden mx-4">
                    <div 
                      className="h-full bg-gold transition-all duration-500" 
                      style={{ width: `${(dailyTasks.filter(t => t.completed).length / dailyTasks.length) * 100}%` }}
                    />
                  </div>
                )}
              </div>
              
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addDailyTask()}
                  placeholder="أضف مهمة جديدة..."
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-gold"
                />
                <button
                  onClick={addDailyTask}
                  className="bg-navy text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-navy/90 transition-colors"
                >
                  إضافة
                </button>
              </div>

              <div className="space-y-2">
                {dailyTasks.length === 0 ? (
                  <p className="text-center text-gray-400 text-xs py-4">لا توجد مهام مضافة لليوم</p>
                ) : (
                  dailyTasks.map(task => (
                    <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl group">
                      <div 
                        className="flex items-center gap-3 cursor-pointer flex-1"
                        onClick={() => toggleDailyTask(task.id)}
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-300" />
                        )}
                        <span className={`text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-navy font-medium'}`}>
                          {task.text}
                        </span>
                      </div>
                      <button
                        onClick={() => deleteDailyTask(task.id)}
                        className="p-1 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <RotateCcw className="w-4 h-4 rotate-45" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-navy">الخطة الأسبوعية</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">الأسبوع الحالي:</span>
                <select 
                  value={currentWeek} 
                  onChange={(e) => setCurrentWeek(Number(e.target.value))}
                  className="bg-white border border-gray-200 rounded-lg px-2 py-1 text-sm font-bold text-navy"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i+1} value={i+1}>الأسبوع {i+1}</option>
                  ))}
                </select>
              </div>
            </div>

            {WEEKLY_PLAN.map((weekData) => (
              <div 
                key={weekData.week} 
                className={`bg-white rounded-2xl p-5 shadow-sm border-2 transition-all ${
                  weekData.week === currentWeek ? 'border-gold' : 'border-transparent'
                } ${isWeekDelayed(weekData.week) ? 'bg-red-50 border-red-200' : ''}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-bold text-lg ${weekData.week === currentWeek ? 'text-navy' : 'text-gray-500'}`}>
                        الأسبوع {weekData.week}
                      </h3>
                      {weekData.week === currentWeek && (
                        <span className="bg-gold text-navy text-[10px] px-2 py-0.5 rounded-full font-bold">الحالي</span>
                      )}
                      {isWeekDelayed(weekData.week) && (
                        <div className="flex items-center gap-1 text-red-600 text-[10px] font-bold animate-pulse">
                          <AlertCircle className="w-3 h-3" />
                          تأخير!
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold">{getWeekDateRange(weekData.week)}</span>
                  </div>
                  <div className="text-xs font-bold text-gray-400">
                    {weekData.topics.filter(tid => progress[tid] === 'completed').length} / {weekData.topics.length}
                  </div>
                </div>

                <div className="space-y-3">
                  {weekData.topics.map((topicId) => {
                    const data = allTopics[topicId];
                    if (!data) return null;
                    const { topic, subject } = data;
                    return (
                      <div key={topicId} className="flex items-center gap-2">
                        <span className="text-lg">{subject.emoji}</span>
                        <div className="flex-1">
                          <TopicItem 
                            topic={topic} 
                            status={progress[topicId] || 'not_started'} 
                            onToggle={() => cycleStatus(topicId)}
                            onFocus={() => startFocus(topicId)}
                            compact
                            note={notes[topicId] || ''}
                            onNoteChange={(val) => updateNote(topicId, val)}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Study Plan */}
        <div className="bg-navy text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="w-12 h-12" />
          </div>
          <h3 className="text-gold font-bold text-xl mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            الخطة الدراسية المقترحة
          </h3>
          <div className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
            {activeRound === 1 ? STUDY_PLANS.round1 : STUDY_PLANS.round2}
          </div>
        </div>
      </div>

      {/* Focus Mode Overlay */}
      <AnimatePresence>
        {focusMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-navy flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="max-w-md w-full">
              <div className="mb-8">
                <div className={`text-sm font-bold uppercase tracking-widest mb-2 ${focusMode.isBreak ? 'text-green-400' : 'text-gold'}`}>
                  {focusMode.isBreak ? 'وقت الراحة' : 'وضع التركيز'}
                </div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl">{allTopics[focusMode.topicId]?.subject.emoji}</span>
                  <h2 className="text-3xl font-extrabold text-white">
                    {allTopics[focusMode.topicId]?.topic.name}
                  </h2>
                </div>
              </div>

              <div className="relative w-64 h-64 mx-auto mb-12">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="128"
                    cy="128"
                    r="120"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-white/10"
                  />
                  <motion.circle
                    cx="128"
                    cy="128"
                    r="120"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 120}
                    animate={{ 
                      strokeDashoffset: (2 * Math.PI * 120) * (1 - focusMode.timeLeft / (focusMode.isBreak ? 5 * 60 : 25 * 60)) 
                    }}
                    className={focusMode.isBreak ? 'text-green-500' : 'text-gold'}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-mono font-bold text-white">
                    {Math.floor(focusMode.timeLeft / 60)}:{(focusMode.timeLeft % 60).toString().padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={() => setFocusMode(prev => prev ? { ...prev, isActive: !prev.isActive } : null)}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
                >
                  {focusMode.isActive ? <Pause className="w-8 h-8 text-navy" /> : <Play className="w-8 h-8 text-navy ml-1" />}
                </button>
                <button
                  onClick={() => setFocusMode(prev => prev ? { ...prev, timeLeft: prev.isBreak ? 5 * 60 : 25 * 60, isActive: false } : null)}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <RotateCcw className="w-5 h-5 text-white" />
                </button>
              </div>

              <button
                onClick={() => setFocusMode(null)}
                className="mt-12 text-white/50 hover:text-white font-bold transition-colors"
              >
                إنهاء الجلسة والعودة
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-3 px-6 z-[150] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button
          onClick={() => setActiveTab('weekly')}
          className={`flex flex-col items-center gap-1 transition-all ${
            activeTab === 'weekly' ? 'text-navy scale-110' : 'text-gray-400'
          }`}
        >
          <ListTodo className={`w-6 h-6 ${activeTab === 'weekly' ? 'text-gold' : ''}`} />
          <span className="text-[10px] font-bold">الخطة</span>
        </button>
        
        <button
          onClick={() => setActiveTab('subjects')}
          className={`flex flex-col items-center gap-1 transition-all ${
            activeTab === 'subjects' ? 'text-navy scale-110' : 'text-gray-400'
          }`}
        >
          <BookOpen className={`w-6 h-6 ${activeTab === 'subjects' ? 'text-gold' : ''}`} />
          <span className="text-[10px] font-bold">المواد</span>
        </button>
      </div>

      {/* Motivational Toast at Bottom */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[150] bg-gold text-navy px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 whitespace-nowrap"
          >
            <Sparkles className="w-5 h-5" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Motivational Footer */}
      <div className="max-w-2xl mx-auto px-4 mt-8 pb-8">
        <div className="bg-white/50 border border-dashed border-gray-200 rounded-2xl p-4 text-center">
          <p className="text-gray-400 text-sm font-bold italic">
            "ما بقى شي، هانت يا بطل! كل موضوع تخلصه هو خطوة أقرب لحلمك."
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, total }: { icon: React.ReactNode, label: string, value: string | number, total?: number }) {
  return (
    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
      <div className="mb-1">{icon}</div>
      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{label}</div>
      <div className="text-lg font-extrabold text-navy">
        {value}
        {total !== undefined && <span className="text-xs text-gray-300 font-normal"> / {total}</span>}
      </div>
    </div>
  );
}

function TopicItem({ 
  topic, 
  status, 
  onToggle, 
  onFocus, 
  compact = false,
  note = '',
  onNoteChange
}: { 
  topic: Topic, 
  status: TopicStatus, 
  onToggle: () => void, 
  onFocus: () => void,
  compact?: boolean,
  note?: string,
  onNoteChange?: (val: string) => void,
  key?: string | number
}) {
  const [showNote, setShowNote] = useState(false);

  const getStatusColor = () => {
    switch (status) {
      case 'completed': return 'bg-green-500 text-white border-green-600';
      case 'in_progress': return 'bg-yellow-400 text-navy border-yellow-500';
      default: return 'bg-red-500 text-white border-red-600';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-4 h-4" />;
      case 'in_progress': return <Clock className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'completed': return 'خلص';
      case 'in_progress': return 'ناقص';
      default: return 'ما بدأت';
    }
  };

  return (
    <div className={`bg-white rounded-lg border transition-all ${
      topic.isCritical ? 'border-red-200 shadow-[0_0_10px_rgba(239,68,68,0.1)]' : 'border-gray-100'
    }`}>
      <div className={`flex items-center justify-between p-3 ${compact ? 'py-2' : ''}`}>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className={`text-sm font-medium truncate ${topic.isCritical ? 'text-red-700 font-bold' : 'text-gray-700'}`}>
            {topic.name}
            {topic.isCritical && <span className="mr-2 text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded uppercase">مهم جداً</span>}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {!compact && (
            <button 
              onClick={() => setShowNote(!showNote)}
              className={`p-1.5 rounded-lg transition-colors ${showNote ? 'bg-gold/20 text-gold' : 'text-gray-300 hover:text-gray-500'}`}
            >
              <StickyNote className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onFocus}
            className="p-1.5 text-gray-300 hover:text-navy hover:bg-gray-100 rounded-lg transition-all"
            title="وضع التركيز"
          >
            <Clock className="w-4 h-4" />
          </button>
          <button 
            onClick={onToggle}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 border-b-2 shadow-sm ${getStatusColor()}`}
          >
            {getStatusIcon()}
            {!compact && getStatusText()}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {showNote && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-3 pb-3 overflow-hidden"
          >
            <textarea
              value={note}
              onChange={(e) => onNoteChange?.(e.target.value)}
              placeholder="اكتب ملاحظاتك هنا..."
              className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs text-gray-600 focus:outline-none focus:border-gold min-h-[60px] resize-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
