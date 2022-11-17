import React, {useEffect, useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/letstalk.json";
import Image from "next/image";
import Button, { ButtonTypes }  from "../common/mainButton";

interface Props {
    isOpened: boolean,
    setIsOpened: Function
}

interface InputProps {
    type?: string,
    label?: string,
    value?: string,
    className?: string,
    onChange?: any,
    required?: boolean
}
interface LooseObject {
    [key: string]: any
}
const Input = ({type, label, value, className, onChange, required}:InputProps) => {
    return(
        <div className="input_box">
            <input 
            type={type ? type : 'text'} 
            value={value ? value : ''} 
            className={className ? className : ''} 
            placeholder={label ? label : 'label'}
            onChange={onChange} required={required}/>
            <label>{label ? label : 'label'}</label>
        </div>
    );
}

const TextArea = ({label, value, className, onChange}:InputProps) => {
    return(
        <div className="input_box">
            <textarea 
            className={className ? className : ''} 
            placeholder={label ? label : 'label'}
            onChange={onChange} defaultValue={value ? value : ''}></textarea>
            <label>{label ? label : 'label'}</label>
        </div>
    );
}

const LetsTalkModal = ((props:Props) => {
    const {isOpened, setIsOpened} = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");
    const [phoneFocused, setPhoneFocused] = useState(false);

    useEffect(()=>{
        if(isOpened){
            document.documentElement.style.overflow = "hidden";
            document.documentElement.style.paddingRight = "1rem";
        }else{
            document.documentElement.style.overflow = "initial";
            document.documentElement.style.paddingRight = "0";
        }
    },[isOpened]);


    useEffect(()=>{
        document.addEventListener('click', function(evt){
            const element = (evt.target as HTMLInputElement);
            if(element.closest(".react-tel-input")){
                setPhoneFocused(true);
            }else{
                setPhoneFocused(false);
            }
            // if(document.querySelector(".react-tel-input")){
            //     if(document.querySelector(".react-tel-input").querySelector(".search-box")){
            //         document.querySelector(".react-tel-input").querySelector(".search-box").setAttribute('tabindex', '-1');
            //     }
            // }
        });
        
    },[]);

    const onPhoneInputFocus = () => {
        setPhoneFocused(true);
    }
    const  onPhoneInputBlur = () => {
        setTimeout(() => {
            document.activeElement.addEventListener('blur', (evt)=>{
                const focusedCountryDropdown = evt.target as HTMLDivElement
                console.log(focusedCountryDropdown);
                if(!focusedCountryDropdown.classList.contains('open')){
                    setPhoneFocused(false);
                }
            });
        }, 10);
    }

    const handelSubmit = (e:any) => {
        const formData:LooseObject = {};
        name && (formData.name = name);
        email && (formData.email = email);
        phone && (formData.phone = phone);
        comment && (formData.comment = comment);
        console.log(formData);
    }

    return (
        <div className={`lets_talk_modal ${isOpened ? 'active' : ''}`}>
            <div className="model_backdrop" onClick={()=>setIsOpened(false)}></div>
            <div className="model_content_wrapper">
                <div className="model_content">
                    <span className="close_modal" onClick={()=>setIsOpened(false)}><Image src="/corss.svg" width="100%" height="100%" alt="close" /></span>
                    <div className="modle_left">
                        <Lottie animationData={groovyWalkAnimation} loop={true} />
                    </div>
                    <div className="model_right">
                        <h2>Feel Free to talk to me</h2>
                        <p>I will contact you soon.</p>
                        <form onSubmit={handelSubmit}>
                            <Input
                                value={name}
                                onChange={(evt : any) =>setName(evt.target.value)}
                                label="Name"
                                required={true}
                            />
                            <Input
                                value={email}
                                onChange={(evt : any) =>setEmail(evt.target.value)}
                                label="Email"
                                type="email"
                                required={true}
                            />
                            <PhoneInput
                            containerClass={`${!phone ? 'isEmpty' :''} ${phoneFocused ? 'focused' : ''}`}
                            enableSearch={true}
                            value={phone}
                            specialLabel="Phone"
                            onChange={phone =>  setPhone(phone)}
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true,
                                onFocus: onPhoneInputFocus,
                                onBlur: onPhoneInputBlur
                            }}
                            />
                            <TextArea
                                value={comment}
                                onChange={(evt : any) =>setComment(evt.target.value)}
                                label="Comment"
                            />
                            
                            {/* <button
                            className="py-2 px-7 font-medium rounded text-base md:text-xl tracking-wide link duration-300 flex items-center"
                            type="submit">Submit</button> */}
                            <Button
                                classes="ml-3"
                                type={ButtonTypes.PRIMARY}
                                name="Send"
                                onClick={()=>{}}
                                ></Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default LetsTalkModal;