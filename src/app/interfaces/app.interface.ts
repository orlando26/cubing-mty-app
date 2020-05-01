interface Scramble {
  scramblerId: string;
  sequence: string[];
  rawSequence: string;
}

interface User {
  birthday: string;
  cityId: number;
  email: string;
  image: string;
  name: string;
  nickname: string;
  lastname: string;
  roles: Role[];
  stateId: number;
  password: string;
  wcaId: string;
}

interface Solve {
  cube: string;
  date: string;
  dnf: boolean;
  plus2: boolean;
  id: number;
  scramble: string;
  time: number;
  timeStr: string;
  userId: number;
}

interface Tourney {
  id: number;
  name: string;
  endDate: string;
  startDate: string;
}

interface Role {
  role: string;
}

interface State {
  id: '';
  name: '';
  abbrev: '';
}

interface City {
  id: '';
  stateId: '';
  name: '';
}


