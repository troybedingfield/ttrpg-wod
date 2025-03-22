'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'




// async function checkUser() {
//     const supabase = await createClient()
//     const { data, error } = await supabase.auth.getUser()
//     if (error || !data?.user) {
//         redirect('/login')
//     }
//     if (!error) {

//         return data;
//     }
// }


// export async function getCharacterSheet() {
//     const data = await checkUser();


// }



export async function deleteChar(formData: FormData) {
    const id = formData.get('id')
    const supabase = await createClient()
    const { error } = await supabase
        .from('character')
        .delete()
        .eq('id', id)
    if (error) {

    }


    revalidatePath('/characters', 'layout')

}




export async function createChar(formData: FormData) {
    const user = formData.get('user')
    const supabase = await createClient()
    const { data: newCharacter, error: newCharError } = await supabase
        .from('character')
        .insert([
            { uuid: user, charName: 'Character Name' },
        ])
        .select()


    if (newCharError) {
        console.log(newCharError);
    }

    if (!newCharError) {
        const { error: newAttError } = await supabase
            .from('charAttributes')
            .insert([
                { id: newCharacter[0].id, uuid: user, charStr: [false, false, false, false, false] },
            ])
            .select()

        if (newAttError) {
            console.log(newAttError);
        }

        const { data: newSkills, error: newSKillsError } = await supabase
            .from('charSkills')
            .insert([
                { id: newCharacter[0].id, uuid: user, charAth: [false, false, false, false, false] },
            ])
            .select()

        if (newSKillsError) {
            console.log(newSKillsError);
        }


        const { data: newTTCB, error: newTTCBError } = await supabase
            .from('charTTCB')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newTTCBError) {
            console.log(newTTCBError);
        }

        const { data: newRHH, error: newRHHError } = await supabase
            .from('charRHH')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newRHHError) {
            console.log(newRHHError);
        }

        const { data: newHW, error: newHWError } = await supabase
            .from('charHealthAndWillpower')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newHWError) {
            console.log(newHWError);
        }

        const { data: newExp, error: newExpError } = await supabase
            .from('charExperience')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newExpError) {
            console.log(newExpError);
        }

        const { data: newBP, error: newBPError } = await supabase
            .from('charBloodPotency')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newBPError) {
            console.log(newBPError);
        }

        const { data: newBN, error: newBNError } = await supabase
            .from('charBioAndNotes')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newBNError) {
            console.log(newBNError);
        }


        if (!newAttError && !newSKillsError && !newAttError && !newTTCBError && !newRHHError && !newHWError && !newExpError && !newBPError && !newBNError) {
            revalidatePath('/characters', 'layout')
            redirect(`/characters/${newCharacter[0].id}`)
        }
    }
}


export async function updateCharacterInfo(formData: any) {
    const id = formData.id;
    const name = formData.name;
    const chronicle = formData.chronicle;
    const sire = formData.sire;
    const concept = formData.concept;
    const ambition = formData.ambition;
    const desire = formData.desire;
    const predator = formData.predator;
    const clan = formData.clan;
    const generation = formData.generation;
    const supabase = await createClient()
    const { error } = await supabase
        .from('character')
        .update({
            charName: name,
            charChronicle: chronicle,
            charSire: sire,
            charConcept: concept,
            charAmbition: ambition,
            charDesire: desire,
            charPredator: predator,
            charClan: clan,
            charGen: generation
        })
        .eq('id', id)
        .select()

    if (error) {

    }

    if (!error) {


    }

    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Character Info Updated!", type: "success" };
    // redirect(`/characters/${id}`);

}


export async function updateHealth(formData: any) {

    const id = formData.id
    const healthNumber = formData.healthNumber
    const health = formData.health

    const supabase = await createClient()
    const { data: charHealth, error: charHealthError } = await supabase
        .from('charHealthAndWillpower')
        .update({
            charHealth: health,
            health: healthNumber
        })
        .eq('id', id)
        .select()

    if (charHealthError) {
        console.log(charHealthError);
        return { message: `${charHealthError.message}`, type: "error" };
    }

    if (!charHealthError) {
        return { message: "Health Updated!", type: "success" };

    }


}


export async function updateWillpower(formData: any) {

    const id = formData.id
    const willpowerNumber = formData.willpowerNumber
    const willpower = formData.willpower

    const supabase = await createClient()

    const { data: charWillpower, error: charWillpowerError } = await supabase
        .from('charHealthAndWillpower')
        .update({
            charWillpower: willpower,
            willpower: willpowerNumber
        })
        .eq('id', id)
        .select()

    if (charWillpowerError) {
        console.log(charWillpowerError);
        return { message: `${charWillpowerError.message}`, type: "error" };
    }

    if (!charWillpowerError) {

        return { message: "Willpower Updated!", type: "success" };
    }
}


export async function updateResonance(formData: any) {

    const id = formData.id
    const resonance = formData.resonance

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charRHH')
        .update({
            resonance: resonance,

        })
        .eq('id', id)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {

        return { message: "Resonance Updated!", type: "success" };
    }
}


export async function updateHunger(formData: any) {

    const id = formData.id
    const hunger = formData.hunger

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charRHH')
        .update({
            hunger: hunger,

        })
        .eq('id', id)
        .select()

    if (error) {

    }

    if (!error) {
        return { message: "Hunger Updated!", type: "success" };

    }
}


export async function updateHumanity(formData: any) {
    const id = formData.id
    const humanity = formData.humanity

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charRHH')
        .update({
            humanity: humanity,

        })
        .eq('id', id)
        .select()

    if (error) {

    }

    if (!error) {

        return { message: "Humanity Updated!", type: "success" };

    }

}


export async function updateAttributes(formData: any) {
    const id = formData.id
    const str = formData.str
    const dex = formData.dex
    const stam = formData.stam
    const char = formData.char
    const man = formData.man
    const comp = formData.comp
    const int = formData.int
    const wits = formData.wits
    const res = formData.res

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charAttributes')
        .update({
            charStr: str,
            charDex: dex,
            charStam: stam,
            charChar: char,
            charMan: man,
            charComp: comp,
            charInt: int,
            charWits: wits,
            charRes: res
        })
        .eq('id', id)
        .select()

    if (error) {

    }

    if (!error) {
        return { message: "Character Attributes Updated!", type: "success" };

    }
}



export async function updateSkills(formData: any) {

    const id = formData.id
    const ath = formData.ath
    const athSpec = formData.athSpec
    const bra = formData.bra
    const braSpec = formData.braSpec
    const cra = formData.cra
    const craSpec = formData.craSpec
    const dri = formData.dri
    const driSpec = formData.driSpec
    const fir = formData.fir
    const firSpec = formData.firSpec
    const lar = formData.lar
    const larSpec = formData.larSpec
    const mel = formData.mel
    const melSpec = formData.melSpec
    const ste = formData.ste
    const steSpec = formData.steSpec
    const sur = formData.sur
    const surSpec = formData.surSpec
    const ani = formData.ani
    const aniSpec = formData.aniSpec
    const eti = formData.eti
    const etiSpec = formData.etiSpec
    const ins = formData.ins
    const insSpec = formData.insSpec
    const int = formData.int
    const intSpec = formData.intSpec
    const lea = formData.lea
    const leaSpec = formData.leaSpec
    const perf = formData.perf
    const perfSpec = formData.perfSpec
    const per = formData.per
    const perSpec = formData.perSpec
    const str = formData.str
    const strSpec = formData.strSpec
    const sub = formData.sub
    const subSpec = formData.subSpec
    const aca = formData.aca
    const acaSpec = formData.acaSpec
    const awa = formData.awa
    const awaSpec = formData.awaSpec
    const fin = formData.fin
    const finSpec = formData.finSpec
    const inv = formData.inv
    const invSpec = formData.invSpec
    const med = formData.med
    const medSpec = formData.medSpec
    const occ = formData.occ
    const occSpec = formData.occSpec
    const pol = formData.pol
    const polSpec = formData.polSpec
    const sci = formData.sci
    const sciSpec = formData.sciSpec
    const tec = formData.tec
    const tecSpec = formData.tecSpec

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charSkills')
        .update({
            charAth: ath,
            charAthSpec: athSpec,
            charBrawl: bra,
            charBrawlSpec: braSpec,
            charCraft: cra,
            charCraftSpec: craSpec,
            charDrive: dri,
            charDriveSpec: driSpec,
            charFire: fir,
            charFireSpec: firSpec,
            charLarc: lar,
            charLarcSpec: larSpec,
            charMelee: mel,
            charMeleeSpec: melSpec,
            charStealth: ste,
            charStealthSpec: steSpec,
            charSurv: sur,
            charSurvSpec: surSpec,
            charAK: ani,
            charAKSpec: aniSpec,
            charEtiq: eti,
            charEtiqSpec: etiSpec,
            charInsi: ins,
            charInsiSpec: insSpec,
            charIntim: int,
            charIntimSpec: intSpec,
            charLead: lea,
            charLeadSpec: leaSpec,
            charPerf: perf,
            charPerfSpec: perfSpec,
            charPers: per,
            charPersSpec: perSpec,
            charStreet: str,
            charStreetSpec: strSpec,
            charSubt: sub,
            charSubtSpec: subSpec,
            charAcad: aca,
            charAcadSpec: acaSpec,
            charAware: awa,
            charAwareSpec: awaSpec,
            charFin: fin,
            charFinSpec: finSpec,
            charInvest: inv,
            charInvestSpec: invSpec,
            charMed: med,
            charMedSpec: medSpec,
            charOccult: occ,
            charOccutSpec: occSpec,
            charPol: pol,
            charPolSpec: polSpec,
            charSci: sci,
            charSciSpec: sciSpec,
            charTech: tec,
            charTechSpec: tecSpec

        })
        .eq('id', id)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {
        return { message: "Skills Updated!", type: "success" };

    }
}


export async function createDiscipline(user: any, id: any) {
    const supabase = await createClient()
    const { data: newDiscipline, error: newDiscError } = await supabase
        .from('charDisciplines')
        .insert([
            { uuid: user, id: id, disciplineName: 'Discipline Name' },
        ])
        .select()


    if (newDiscError) {
        console.log(newDiscError);
        return { message: `${newDiscError.message}`, type: "success" };
    }


    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Discipline Added!", type: "success" };
    // redirect(`/characters/${id}`);
}


export async function updateDiscipline(formData: any) {

    const disID = formData.disID
    const discName = formData.discName
    const discLevels = formData.discLevels
    const discNotes = formData.discNotes

    const supabase = await createClient()

    const { data: disData, error } = await supabase
        .from('charDisciplines')
        .update({
            disciplineName: discName,
            disciplineLevels: discLevels,
            disciplineNotes: discNotes
        })
        .eq('dis_id', disID)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    return { message: "Discipline Updated!", type: "success" };
}


export async function deleteDiscipline(disID: any, id: any) {
    const supabase = await createClient()
    const { error } = await supabase
        .from('charDisciplines')
        .delete()
        .eq('dis_id', disID)
    if (error) {

        return { message: `${error.message}`, type: "error" };
    }



    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Discipline Removed!", type: "success" };
    // redirect(`/characters/${id}`);
}


export async function updateTenets(formData: any) {
    const id = formData.id
    const chronTenets = formData.chronTenets
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('charTTCB')
        .update({
            chronTenets: chronTenets,

        })
        .eq('id', id)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }
    return { message: "Tenets Updated!", type: "success" };

}

export async function updateTouchstones(formData: any) {
    const id = formData.id
    const touchConvictions = formData.touchConvictions
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('charTTCB')
        .update({
            touchstoneAndConvictions: touchConvictions,

        })
        .eq('id', id)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    return { message: "Touchstones & Convitions Updated!", type: "success" };
}


export async function updateClanBane(formData: any) {
    const id = formData.id
    const clanBane = formData.clanBane
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charTTCB')
        .update({
            clanBane: clanBane,

        })
        .eq('id', id)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    return { message: "Clan Bane Updated!", type: "success" };
}


export async function addAdvantage(user: any, id: any) {
    const supabase = await createClient()
    const { data: newAdv, error: newAdvError } = await supabase
        .from('charAdvantages')
        .insert([
            { uuid: user, id: id, advantageName: null },
        ])
        .select()


    if (newAdvError) {
        console.log(newAdvError);
        return { message: `${newAdvError.message}`, type: "error" };
    }

    if (!newAdvError) {

    }

    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Advantage Added!", type: "success" };
    // redirect(`/characters/${id}`);
}


export async function updateAdvantage(formData: any) {
    const advID = formData.advID
    const advantageName = formData.advantageName
    const advantageLevels = formData.advantageLevels


    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charAdvantages')
        .update({
            advantageName: advantageName,
            advantageLevels: advantageLevels
        })
        .eq('adv_id', advID)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {
        return { message: "Advantage Updated!", type: "success" };

    }
}


export async function deleteAdvantage(advID: any, id: any) {
    const supabase = await createClient()
    const { error } = await supabase
        .from('charAdvantages')
        .delete()
        .eq('adv_id', advID)
    if (error) {

        return { message: `${error.message}`, type: "error" };
    }



    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Advantage Removed!", type: "success" };
    // redirect(`/characters/${id}`);
}


export async function addFlaw(user: any, id: any) {
    const supabase = await createClient()
    const { data: newFlaw, error: newAdvError } = await supabase
        .from('charFlaws')
        .insert([
            { uuid: user, id: id, flawName: null },
        ])
        .select()


    if (newAdvError) {
        console.log(newAdvError);
        return { message: `${newAdvError.message}`, type: "error" };
    }

    if (!newAdvError) {

    }
    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Flaw Added!", type: "success" };
    // redirect(`/characters/${id}`);
}


export async function updateFlaw(formData: any) {
    const flawID = formData.flawID
    const flawName = formData.flawName
    const flawLevels = formData.flawLevels
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charFlaws')
        .update({
            flawName: flawName,
            flawLevels: flawLevels
        })
        .eq('flaw_id', flawID)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }


    return { message: "Flaw Updated!", type: "success" };
}


export async function deleteFlaw(flawID: any, id: any) {
    const supabase = await createClient()
    const { error } = await supabase
        .from('charFlaws')
        .delete()
        .eq('flaw_id', flawID)
    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {

    }

    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Flaw Removed!", type: "success" };
    // redirect(`/characters/${id}`);
}


export async function updateBloodPotency(formData: any) {
    const id = formData.id;
    const bloodPotency = formData.bloodPotency

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charBloodPotency')
        .update({
            bloodPotency: bloodPotency,

        })
        .eq('id', id)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {


    }

    return { message: "Blood Potency Updated!", type: "success" };
}

export async function updateBloodForm(formData: any) {
    const id = formData.id;
    const bloodSurge = formData.bloodSurge
    const powerBonus = formData.powerBonus
    const feedingPenalty = formData.feedingPenalty
    const mendAmount = formData.mendAmount
    const rouseReroll = formData.rouseReroll
    const baneSeverity = formData.baneSeverity


    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charBloodPotency')
        .update({
            bloodSurge: bloodSurge,
            powerBonus: powerBonus,
            feedingPenalty: feedingPenalty,
            mendAmount: mendAmount,
            rouseReroll: rouseReroll,
            baneSeverity: baneSeverity,

        })
        .eq('id', id)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {


    }

    return { message: "Blood Atttributes Updated!", type: "success" };
}


export async function updateNotes(formData: any) {
    const id = formData.id;
    const notes = formData.notes;

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charBioAndNotes')
        .update({
            notes: notes,

        })
        .eq('id', id)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {


    }

    return { message: "Notes Updated!", type: "success" };
}


export async function updateBio(formData: any) {
    const id = formData.id;
    const trueAge = formData.trueAge;
    const apparentAge = formData.apparentAge;
    const DOB = formData.DOB;
    const DOD = formData.DOD;
    const appearance = formData.appearance;
    const distinguishingFeatures = formData.distinguishingFeatures;
    const history = formData.history;

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charBioAndNotes')
        .update({
            trueAge: trueAge,
            apparentAge: apparentAge,
            DOB: DOB,
            DOD: DOD,
            appearance: appearance,
            distinguishingFeatures: distinguishingFeatures,
            history: history,

        })
        .eq('id', id)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {


    }

    return { message: "Bio Updated!", type: "success" };
}


export async function updateExperience(formData: any) {

    const totalExp = formData.totalExp;
    const id = formData.id;


    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charExperience')
        .update({
            totalExp: totalExp,

        })
        .eq('id', id)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {

        return { message: "Experience Updated!", type: "success" };
    }

}


export async function updateSpent(formData: any) {

    const spentExp = formData.spentExp;
    const id = formData.id;


    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charExperience')
        .update({
            spentExp: spentExp,

        })
        .eq('id', id)
        .select()

    if (error) {

        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {

        return { message: "Spent EXP Updated!", type: "success" };
    }

}