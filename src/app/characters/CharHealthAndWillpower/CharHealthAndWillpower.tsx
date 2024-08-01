'use client'
import { useRef, useState } from "react";
import './CharHealthAndWillpower.scss'
import CheckBox from "@/app/components/CheckBox/CheckBox";
import Button from "@/app/components/Button/Button";
import { updateHealth, updateWillpower } from "../actions";

export default function CharHealthAndWillpower({ ...props }) {
    const { id, data, params } = props;

    const [isEditingHealth, setIsEditingHealth] = useState(false);
    const [isEditingWill, setIsEditingWill] = useState(false);

    const [charHealth, setCharHealth] = useState(data.charHealth)
    const [charWillpower, setCharWillpower] = useState(data.charWillpower)

    const [health, setHealth] = useState(data.health)
    const [willpower, setWillpower] = useState(data.willpower)

    const healthForm = useRef<any | undefined>();
    const willPowerform = useRef<any | undefined>();


    function editHealth() {
        setIsEditingHealth(isEditingHealth => !isEditingHealth)
    }

    function editWillpower() {
        setIsEditingWill(isEditingWill => !isEditingWill)
    }

    async function handleHealthFormSbumit(event: any, form: any) {
        event.preventDefault()
        let level1 = [form.current[0].checked, form.current[0].indeterminate]
        let level2 = [form.current[1].checked, form.current[1].indeterminate]
        let level3 = [form.current[2].checked, form.current[2].indeterminate]
        let level4 = [form.current[3].checked, form.current[3].indeterminate]
        let level5 = [form.current[4].checked, form.current[4].indeterminate]
        let level6 = [form.current[5].checked, form.current[5].indeterminate]
        let level7 = [form.current[6].checked, form.current[6].indeterminate]
        let level8 = [form.current[7].checked, form.current[7].indeterminate]
        let level9 = [form.current[8].checked, form.current[8].indeterminate]
        let level10 = [form.current[9].checked, form.current[9].indeterminate]
        let healthNumber = form.current[10].value
        let id = form.current[11].value
        let health = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10]

        setCharHealth(health);
        setHealth(healthNumber);

        let formData = {
            id,
            healthNumber,
            health
        }

        updateHealth(formData);
        setIsEditingHealth(isEditingHealth => !isEditingHealth)


    }

    async function handleWillpowerFormSbumit(event: any, form: any) {
        event.preventDefault()
        let level1 = [form.current[0].checked, form.current[0].indeterminate]
        let level2 = [form.current[1].checked, form.current[1].indeterminate]
        let level3 = [form.current[2].checked, form.current[2].indeterminate]
        let level4 = [form.current[3].checked, form.current[3].indeterminate]
        let level5 = [form.current[4].checked, form.current[4].indeterminate]
        let level6 = [form.current[5].checked, form.current[5].indeterminate]
        let level7 = [form.current[6].checked, form.current[6].indeterminate]
        let level8 = [form.current[7].checked, form.current[7].indeterminate]
        let level9 = [form.current[8].checked, form.current[8].indeterminate]
        let level10 = [form.current[9].checked, form.current[9].indeterminate]
        let willpowerNumber = form.current[10].value
        let id = form.current[11].value
        let willpower = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10]

        setCharWillpower(willpower);
        setWillpower(willpowerNumber);


        let formData = {
            id,
            willpowerNumber,
            willpower
        }

        updateWillpower(formData);
        setIsEditingWill(isEditingWill => !isEditingWill)

    }
    return (
        <>


            <div className="container flex sm:flex-row flex-col gap-8">
                <div className="totalExp flex items-center sm:justify-end w-full justify-center">
                    <div className="flex flex-col">
                        <div className="sectionTitle flex gap-2 justify-center">Health
                            {health != null && <span className="healthNumber">{health}</span>}
                            <a onClick={() => editHealth()}><i
                                className="icon icon-edit-b"></i></a>
                        </div>
                        {!isEditingHealth && <div className="flex border border-slate-500 dark:border-0 dark:bg-white dark:bg-opacity-60 rounded-lg p-2 gap-0.5 [&_div:nth-child(5)]:mr-2">
                            {charHealth.map((health: any, index: any) => {
                                return (
                                    <div key={index} className={['rounded border border-slate-900 sm:w-4 sm:h-4 w-6 h-6', health[0] ? 'cross' : '', health[1] ? 'slash' : ''].join(' ')} ></div>
                                )
                            })}
                        </div>}


                        {isEditingHealth &&
                            <form ref={healthForm} action="" onSubmit={(e) => handleHealthFormSbumit(e, healthForm)}>
                                <div className="flex sm:flex-row flex-col gap-2">
                                    <div className="relative flex border border-slate-500 dark:border-0 dark:bg-white dark:bg-opacity-60 rounded-lg p-2 [&_div:nth-child(5)]:pr-2">
                                        {charHealth.map((health: any, index: any) => {
                                            return (
                                                <CheckBox key={index} id={"customHealthCheckbox" + index} checked={health[0]}
                                                    indeterminate={health[1]} data={health} />
                                            )
                                        })}
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <input className="max-w-16" type="number" defaultValue={health} />
                                    </div>
                                    <input type="hidden" name="id" value={params.characterID} />
                                    <Button size="small">Save</Button>
                                </div>
                            </form>}
                    </div>

                </div>
                <div className="spentExp flex items-center sm:justify-start w-full justify-center">
                    <div className="flex flex-col">
                        <div className="sectionTitle flex gap-2 justify-center">Willpower
                            {willpower != null && <span className="willpowerNumber">{willpower}</span>}
                            <a onClick={() => editWillpower()}><i
                                className="icon icon-edit-b"></i></a>
                        </div>
                        {!isEditingWill && <div className="flex border border-slate-500 dark:border-0 dark:bg-white dark:bg-opacity-60 rounded-lg p-2 gap-0.5 [&_div:nth-child(5)]:mr-2">
                            {charWillpower.map((willpower: any, index: any) => {
                                return (
                                    <div key={index} className={['rounded border border-slate-800 sm:w-4 sm:h-4 w-6 h-6 ', willpower[0] ? 'cross' : '', willpower[1] ? 'slash' : ''].join(' ')} ></div>
                                )
                            })}
                        </div>}
                        {isEditingWill && <form ref={willPowerform} action="" onSubmit={(e) => handleWillpowerFormSbumit(e, willPowerform)}>
                            <div className="flex sm:flex-row flex-col gap-2">
                                <div className="relative flex border border-slate-500 dark:border-0 dark:bg-white dark:bg-opacity-60 rounded-lg p-2  [&_div:nth-child(5)]:pr-2">
                                    {charWillpower.map((willpower: any, index: any) => {
                                        return (
                                            // <div key={index} className={['circle', health[0] ? 'filled' : ''].join(' ')} ></div>
                                            <CheckBox key={index} id={"customHealthCheckbox" + index} checked={willpower[0]}
                                                indeterminate={willpower[1]} data={willpower} />
                                        )
                                    })}
                                </div>
                                <div className="flex justify-center items-center">
                                    <input className="max-w-16" type="number" defaultValue={willpower} />
                                </div>
                                <input type="hidden" name="id" value={params.characterID} />
                                <Button size="small">Save</Button>
                            </div>
                        </form>}
                    </div>
                </div>


            </div>
        </>
    )
}