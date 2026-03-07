import Human from './human'
import Robot from './robot'
import Cat from './cat'
import Mech from './mech'
import Ghost from './ghost'
import Slime from './slime'
import Tanuki from './tanuki'
import Pixi from './pixi'
import Knight from './knight'
import Octo from './octo'
import Kaiju from './kaiju'
import Ninja from './ninja'
import Mahou from './mahou'
import Pilot from './pilot'
import Kitsune from './kitsune'
import Samurai from './samurai'
import Saiyan from './saiyan'

Human.displayName = 'human'
Robot.displayName = 'robot'
Cat.displayName = 'cat'
Mech.displayName = 'mech'
Ghost.displayName = 'ghost'
Slime.displayName = 'slime'
Tanuki.displayName = 'tanuki'
Pixi.displayName = 'pixi'
Knight.displayName = 'knight'
Octo.displayName = 'octo'
Kaiju.displayName = 'kaiju'
Ninja.displayName = 'ninja'
Mahou.displayName = 'mahou'
Pilot.displayName = 'pilot'
Kitsune.displayName = 'kitsune'
Samurai.displayName = 'samurai'
Saiyan.displayName = 'saiyan'

export { Human, Robot, Cat, Mech, Ghost, Slime, Tanuki, Pixi, Knight, Octo, Kaiju, Ninja, Mahou, Pilot, Kitsune, Samurai, Saiyan }

export const AVATAR_LIST = [
  Human, Robot, Cat, Mech, Ghost, Slime, Tanuki, Pixi, Knight, Octo, Kaiju,
  Ninja, Mahou, Pilot, Kitsune, Samurai, Saiyan,
]

export function getRandomAvatar(seed, whitelist = null) {
  const pool = whitelist?.length
    ? AVATAR_LIST.filter(a => whitelist.includes(a.displayName))
    : AVATAR_LIST
  if (pool.length === 0) return AVATAR_LIST[0]
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i)
    hash |= 0
  }
  return pool[Math.abs(hash) % pool.length]
}
