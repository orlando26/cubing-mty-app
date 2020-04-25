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
  roles: Role[];
  stateId: number;
  wcaId: string;
}

interface Role {
  role: string;
}
