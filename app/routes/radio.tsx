import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const plans = ['Statup', 'Business', 'Enterprise']

export default function MyRadioGroup() {
    const [plan, setPlan] = useState(plans[1])

    return (
        <RadioGroup value={plan} onChange={setPlan} >
            <RadioGroup.Label>Plan</RadioGroup.Label>
            {plans.map((p) => (
                <RadioGroup.Option
                    key={p}
                    value={p}
                    className="ui-checked:bg-blue-500 ui-checked:text-white ui-not-checked:bg-white ui-not-checked:text-black flex"
                    defaultChecked={p == plan}
                >
                    {p}
                    <CheckIcon className="hidden w-6 h-6 ui-checked:block" />
                </RadioGroup.Option>
            ))}
        </RadioGroup>
    )
}