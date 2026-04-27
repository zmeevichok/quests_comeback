export interface Quest {
  id: string;
  title: string;
  description: string;
  expReward: number;
}

export interface QuestInstance {
  id: string;
  quest: Quest;
  status: 'active' | 'completed';
}

export interface User {
  name: string;
  surname: string;
  exp: number;
  avatar?: string;
  email?: string;
}
