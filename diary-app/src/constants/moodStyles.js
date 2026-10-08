// Variasi tampilan kartu berdasarkan mood
export const moodStyles = {
  happy: {
    label: '😊 Senang',
    borderColor: '#f59e0b',
    backgroundColor: '#fffbeb',
    borderWidth: 2,
    accentWidth: 6,
  },
  focus: {
    label: '🎯 Fokus',
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
    borderWidth: 1,
    accentWidth: 6,
  },
  calm: {
    label: '😌 Tenang',
    borderColor: '#10b981',
    backgroundColor: '#ecfdf5',
    borderWidth: 1,
    accentWidth: 3,
  },
  sad: {
    label: '😔 Sedih',
    borderColor: '#6366f1',
    backgroundColor: '#eef2ff',
    borderWidth: 1,
    accentWidth: 10,
  },
  excited: {
    label: '🤩 Semangat',
    borderColor: '#ec4899',
    backgroundColor: '#fdf2f8',
    borderWidth: 2,
    accentWidth: 10,
  },
};

export const defaultMoodStyle = {
  label: '📝 Biasa',
  borderColor: '#e5e7eb',
  backgroundColor: '#ffffff',
  borderWidth: 1,
  accentWidth: 3,
};