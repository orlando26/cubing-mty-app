interface Scramble {
  scramblerId: string;
  sequence: string[];
  rawSequence: string;
}

interface User {
  userId: number;
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

interface Solve {
  id: number;
  userId: number;
  time: number;
  scramble: string;
  cube: string;
  dnf: boolean;
  plus2: boolean;
}


