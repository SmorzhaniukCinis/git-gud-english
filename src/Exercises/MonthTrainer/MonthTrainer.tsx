import * as React from 'react';
import {useState} from 'react';
import MonthSetting from "./MonthSetting";
import MouthExercise from "./MouthExercise";
import CompleteExercise from "../../Common/CompleteExercise";
import SideMenu from "../../Common/SideMenu";
import ExerciseWrapper from "../../Common/ExerciseWrapper";
import {shuffleQuestion} from "../../Common/commonFunctions";

export type exercise = {
    question: string
    engAnswer: string[]
    uaAnswer: string[]
    engSeason: string[]
}

const questions = [
    {
        question: 'First month of year?',
        engAnswer: ['January'],
        uaAnswer: ['Січень'],
        engSeason: ['Winter']
    },
    {
        question: 'Second month of year?',
        engAnswer: ['February',],
        uaAnswer: ['Лютий'],
        engSeason: ['Winter',]
    }, {
        question: 'Third month of year?',
        engAnswer: ['March'],
        uaAnswer: ['Березень'],
        engSeason: ['Spring']
    },
    {
        question: 'Fourth month of year?',
        engAnswer: ['April'],
        uaAnswer: ['Квітень'],
        engSeason: ['Spring']
    }, {
        question: 'Fifth month of year?',
        engAnswer: ['May'],
        uaAnswer: ['Травень'],
        engSeason: ['Spring']
    },
    {
        question: 'Sixth month of year?',
        engAnswer: ['June'],
        uaAnswer: ['Червень'],
        engSeason: ['Summer']
    }, {
        question: 'Seventh month of year?',
        engAnswer: ['July'],
        uaAnswer: ['Липень'],
        engSeason: ['Summer']
    },
    {
        question: 'Eighth month of year?',
        engAnswer: ['August'],
        uaAnswer: ['Серпень'],
        engSeason: ['Summer']
    }, {
        question: 'Ninth month of year?',
        engAnswer: ['September'],
        uaAnswer: ['Вересень'],
        engSeason: ['Autumn', 'Fall']
    },
    {
        question: 'Tenth month of year?',
        engAnswer: ['October'],
        uaAnswer: ['Жовтень'],
        engSeason: ['Autumn', 'Fall']
    }, {
        question: 'Eleventh month of year?',
        engAnswer: ['November'],
        uaAnswer: ['Листопад'],
        engSeason: ['Autumn', 'Fall']
    },
    {
        question: 'Twelfth month of year?',
        engAnswer: ['December'],
        uaAnswer: ['Лютий'],
        engSeason: ['Winter']
    },
]
const MonthTrainer = () => {

    const [isRandom, setIsRandom] = useState<boolean>(false)
    const [isSeason, setIsSeason] = useState<boolean>(true)
    const [currentStep, setCurrentStep] = useState<number>(1)
    const [currentsQuestion, setCurrentsQuestion] = useState<exercise[]>(questions)

    const restart = () => {
        setCurrentStep(1)
        if (isRandom) {
            setCurrentsQuestion(shuffleQuestion(questions))
        } else {
            setCurrentsQuestion(questions)
        }
    }
    const handleIsRandom = (isRandom: boolean) => {
        setCurrentStep(1)
        setIsRandom(isRandom)
        if (isRandom) {
            setCurrentsQuestion(shuffleQuestion(questions))
        } else {
            setCurrentsQuestion(questions)
        }
    }
    return (
        <ExerciseWrapper>
            <SideMenu steps={12} currentStep={currentStep} restart={restart}>
                <MonthSetting isSeason={isSeason} setIsSeason={setIsSeason} restart={restart} step={currentStep}
                              handleIsRandom={handleIsRandom} isRandom={isRandom}/>
            </SideMenu>
            {
                currentStep < 13
                    ? <MouthExercise isSeason={isSeason} setCurrentStep={setCurrentStep}
                                     exercise={currentsQuestion[currentStep - 1]}
                                     step={currentStep}/>
                    : <CompleteExercise setCurrentStep={setCurrentStep}/>
            }
        </ExerciseWrapper>
    );
};

export default MonthTrainer;
