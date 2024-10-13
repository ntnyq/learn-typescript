export function travelConditionRule(callback: (val: number) => void, travelType: 'rule'): void
export function travelConditionRule(callback: (val: number[]) => void, travelType: 'rules'): void
export function travelConditionRule(callback: any, travelType: 'rule' | 'rules'): void {
  if (travelType === 'rule') {
    callback?.(1)
  }

  if (travelType === 'rules') {
    callback?.([1, 2])
  }
}

travelConditionRule(val => {
  console.log({ val })
}, 'rule')

travelConditionRule(val => {
  console.log({ val })
}, 'rules')
