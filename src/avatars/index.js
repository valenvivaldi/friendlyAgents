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

export { Human, Robot, Cat, Mech, Ghost, Slime, Tanuki, Pixi, Knight, Octo, Kaiju }

export const AVATAR_LIST = [
  Human, Robot, Cat, Mech, Ghost, Slime, Tanuki, Pixi, Knight, Octo, Kaiju,
]

export function getRandomAvatar(seed) {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i)
    hash |= 0
  }
  return AVATAR_LIST[Math.abs(hash) % AVATAR_LIST.length]
}
