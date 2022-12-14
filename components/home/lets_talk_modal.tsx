import React, {useEffect, useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/letstalk.json";
import thankyouAnimation from "../../public/thankyou.json";
import loadingAnimation from "../../public/loading.json";
import Image from "next/image";
import Button, { ButtonTypes }  from "../common/mainButton";

import { collection, getDocs, addDoc } from "firebase/firestore";
import {db} from '../../firebase.js';

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
            onChange={onChange} required={required}
            autoComplete="nope"/>
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
            onChange={onChange} defaultValue={value ? value : ''}
            autoComplete="nope"></textarea>
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
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [uploading, setUploading] = useState(false);

    const fetchPost = async () => {
        var contacts;
        await getDocs(collection(db, "contact_form"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                    contacts = newData;
            });
       return contacts;
    }

    const setData = async (data:any) => {
        try {
            const docRef = await addDoc(collection(db, "contact_form"),data);
            console.log("Document written with ID: ", docRef.id);
            setSubmitSuccess(true);
            setUploading(false);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

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

    const handelSubmit =  async (e:any) => {
        e.preventDefault();
        setUploading(true);
        const firebaseContacts : Array<any> = await fetchPost();
        const formData:LooseObject = {};
        name && (formData.name = name);
        email && (formData.email = email);
        phone && (formData.phone = '+' + phone);
        comment && (formData.comment = comment);
        formData.submit_time = new Date();
        if(firebaseContacts.length == 0){
            formData.contact_id = 1
        }else{
            const sortedAsc = [...firebaseContacts].sort((a, b) => a.submit_time.seconds - b.submit_time.seconds);
            formData.contact_id = sortedAsc[sortedAsc.length - 1].contact_id + 1
        }
        setData(formData);
    }

    const handleModalClose = () => {
        setIsOpened(false);
        setName('');
        setEmail('');
        setPhone('');
        setComment('');
        setTimeout(() => {
            setSubmitSuccess(false);
            setUploading(false);
        }, 500);
    }

    return (
        <div className={`lets_talk_modal ${isOpened ? 'active' : ''}`}>
            <div className="model_backdrop" onClick={handleModalClose}></div>
            <div className="model_content_wrapper">
                {!submitSuccess && !uploading ?
                    <div className="model_content">
                        <span className="close_modal" onClick={handleModalClose}><Image src="/corss.svg" width="100%" height="100%" alt="close" /></span>
                        <div className="modle_left">
                            <Lottie animationData={groovyWalkAnimation} loop={true} />
                        </div>
                        <div className="model_right">
                            <h2>Feel Free to talk to me</h2>
                            <p>I will contact you soon.</p>
                            <form autoComplete="asdaszdas" onSubmit={handelSubmit}>
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
                                    autoFocus: false,
                                    autoComplete : "nope",
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
                    </div>: uploading ?
                    <div className="model_content flex_column">
                         <span className="close_modal" onClick={handleModalClose}><Image src="/corss.svg" width="100%" height="100%" alt="close" /></span>
                        <Lottie className="modal_anim loading_anim" animationData={loadingAnimation} loop={true} />
                        <h4 className="please_wait_text">Please wait..</h4>
                    </div> :
                    <div className="model_content flex_column">
                         <span className="close_modal" onClick={handleModalClose}><Image src="/corss.svg" width="100%" height="100%" alt="close" /></span>
                        <Lottie className="modal_anim thank_you_anim" animationData={thankyouAnimation} loop={false} />
                        <h4 className="thank_you_heading">Thank You!!</h4>
                        <p>Saurabh will contact you under 24 hour.</p>
                    </div>}
            </div>
        </div>
    )
});

export default LetsTalkModal;