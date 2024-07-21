'use client'
import { useRef, useState } from "react";
import './CharHealthAndWillpower.scss'
import CheckBox from "@/app/components/CheckBox/CheckBox";
import Button from "@/app/components/Button/Button";
import { createClient } from "@/utils/supabase/client";

export default function charHealthAndWillpower({ ...props }) {
    const { id, data, params } = props;

    const [isEditingHealth, setIsEditingHealth] = useState(false);
    const [isEditingWill, setIsEditingWill] = useState(false);

    const [charHealth, setCharHealth] = useState(data.charHealth)
    const [charWillpower, setCharWillpower] = useState(data.charWillpower)

    const healthForm = useRef<any | undefined>();
    const willPowerform = useRef<any | undefined>();

    const supabase = createClient();

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
        let level10 = [form.current[8].checked, form.current[8].indeterminate]
        let health = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10]

        const { data: charHealth, error: charHealthError } = await supabase
            .from('charHealthAndWillpower')
            .update({
                charHealth: health,
            })
            .eq('id', params.characterID)
            .select()

        if (charHealthError) {
            console.log(charHealthError);
        }

        if (!charHealthError) {

            setCharHealth(health);

            setIsEditingHealth(isEditingHealth => !isEditingHealth)
        }
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
        let level10 = [form.current[8].checked, form.current[8].indeterminate]
        let willpower = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10]

        const { data: charWillpower, error: charWillpowerError } = await supabase
            .from('charHealthAndWillpower')
            .update({
                charWillpower: willpower,
            })
            .eq('id', params.characterID)
            .select()

        if (charWillpowerError) {
            console.log(charWillpowerError);
        }

        if (!charWillpowerError) {

            setCharWillpower(willpower);

            setIsEditingWill(isEditingWill => !isEditingWill)
        }
    }
    return (
        <>


            <div className="container flex sm:flex-row flex-col gap-8">
                <div className="totalExp flex items-center sm:justify-end w-full flex-col">
                    <div className="sectionTitle flex gap-2 justify-center">Health <a onClick={() => editHealth()}><i
                        className="icon icon-edit-b"></i></a>

                    </div>
                    {!isEditingHealth && <div className="flex border border-slate-500 rounded-lg p-2 gap-0.5 [&_div:nth-child(5)]:mr-2">
                        {charHealth.map((health: any, index: any) => {
                            return (
                                <div key={index} className={['rounded border border-slate-800 w-4 h-4', health[0] ? 'cross' : '', health[1] ? 'slash' : ''].join(' ')} ></div>


                            )
                        })}
                    </div>}

                    {isEditingHealth && <form ref={healthForm} action="" onSubmit={(e) => handleHealthFormSbumit(e, healthForm)}>
                        <div className="relative flex border border-slate-500 rounded-lg p-2 [&_div:nth-child(5)]:pr-2">
                            {charHealth.map((health: any, index: any) => {
                                return (
                                    // <div key={index} className={['circle', health[0] ? 'filled' : ''].join(' ')} ></div>
                                    <CheckBox key={index} id={"customHealthCheckbox" + index} checked={health[0]}
                                        indeterminate={health[1]} data={health} />
                                )
                            })}
                        </div>
                        <Button size="small">Save</Button>
                    </form>}

                </div>
                <div className="spentExp flex items-center sm:justify-start w-full flex-col">
                    <div className="sectionTitle flex gap-2 justify-center">Willpower <a onClick={() => editWillpower()}><i
                        className="icon icon-edit-b"></i></a>

                    </div>
                    {!isEditingWill && <div className="flex border border-slate-500 rounded-lg p-2 gap-0.5 [&_div:nth-child(5)]:mr-2">
                        {charWillpower.map((willpower: any, index: any) => {
                            return (
                                <div key={index} className={['rounded border border-slate-800 w-4 h-4', willpower[0] ? 'cross' : '', willpower[1] ? 'slash' : ''].join(' ')} ></div>
                            )
                        })}
                    </div>}
                    {isEditingWill && <form ref={willPowerform} action="" onSubmit={(e) => handleWillpowerFormSbumit(e, willPowerform)}>
                        <div className="relative flex border border-slate-500 rounded-lg p-2  [&_div:nth-child(5)]:pr-2">
                            {charWillpower.map((willpower: any, index: any) => {
                                return (
                                    // <div key={index} className={['circle', health[0] ? 'filled' : ''].join(' ')} ></div>
                                    <CheckBox key={index} id={"customHealthCheckbox" + index} checked={willpower[0]}
                                        indeterminate={willpower[1]} data={willpower} />
                                )
                            })}
                        </div>
                        <Button size="small">Save</Button>
                    </form>}
                </div>


            </div>
        </>
    )
}