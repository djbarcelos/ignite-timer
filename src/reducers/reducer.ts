import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cycleReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.addNewCycle:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }

    case ActionTypes.interruptCurrentCycle:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            cycle.interruptedDate = new Date()
          }
          return cycle
        }),
        activeCycleId: null,
      }
    case ActionTypes.markCurrentCycleAsFinished:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            cycle.finishDate = new Date()
          }
          return cycle
        }),
        activeCycleId: null,
      }
    default:
      return state
  }
}
