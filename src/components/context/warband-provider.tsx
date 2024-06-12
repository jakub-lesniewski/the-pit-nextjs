import { UserCharacter, UserHenchmen, UserHero } from "@/types/characters/UserCharacter";
import { ReactNode, createContext, useState } from "react";

type UserWarbandContext = {
  id: string;
  name: string;
  leader?: UserCharacter;
  heroes: UserCharacter[];
  henchmen: UserCharacter[];
  funds: number;
};

const WarbandContext = createContext<UserWarbandContext | undefined>(undefined);

function WarbandProvider({ children }: { children: ReactNode }) {
  id: crypto.randomUUID();
  const [name, setName] = useState<String>("");
  const [funds, setFunds] = useState<number>(500);
  const [leader, setLeader] = useState<UserHero>();
  const [heroes, setHeroes] = useState<UserHero[]>([]);
  const [henchmen, setHenchmen] = useState<UserHenchmen[]>([]);

  function changeFunds(amount: number) {
    setFunds((prevFunds) => prevFunds + amount);
  }

  function addLeader(newLeader: UserHero) {
    setLeader(newLeader);
  }

  function deleteLeader() {
    setLeader(undefined);
  }

  function addHero(newHero: UserHero) {
    setHeroes([...heroes, newHero]);
  }

  function updateHero(updatedHero: UserHero) {
    setHeroes(heroes.map((hero) => (hero.id === updatedHero.id ? updatedHero : hero)));
  }

  function removeHero(heroId: string) {
    setHeroes(heroes.filter((hero) => hero.id !== heroId));
  }

  function addHenchmen(newHenchmen: UserHenchmen) {
    setHenchmen([...henchmen, newHenchmen]);
  }

  function updateHenchmen(updatedHenchmen: UserHenchmen) {
    setHenchmen(henchmen.map((henchmen) => (henchmen.id === updatedHenchmen.id ? updatedHenchmen : henchmen)));
  }

  function removeHenchmen(henchmenId: string) {
    setHenchmen(henchmen.filter((henchmen) => henchmen.id !== henchmenId));
  }
}
