import { Button } from '../../Buttons'
import { FileInput, Input } from '../../Inputs'
import { ReangeInput } from '../../Inputs/RangeInput'
import { TextArea } from '../../TextArea'
import './Profile.styles.scss'
import swal from "sweetalert";
import { useUser } from '../../../hooks/useUser'
import { useEffect } from 'react'
export const Profile = () => {
  const objUser = useUser().user;
  useEffect(()=>{
    
  },[objUser])

  console.log(objUser);
  const handleInput = (e) => {
    let campo = e.target.name;

    objUser[campo] = e.target.value;
  };
  
  const handleSave = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();

    try {
      localStorage.setItem("user", JSON.stringify(objUser));
      console.log(objUser);
      swal("Good job!", "You information has saved!", "success");
    } catch (error) {
      swal("Oh no!", "something went wrong", "error");
    }

  };

  return (
    <>
      <div className="profile">
        <div className="profile__userInfo">
          <h1>Profile</h1>
          <h4>Personal information</h4>
          <form>
            <Input
              type="text"
              name="email"
              placeholder={objUser.email ? objUser.email : "Ingrese el Email"}
              label="email"
              required
              //value={user.email}

              handleChange={handleInput}
            />

            <Input
              type="text"
              name="name"
              placeholder={objUser.name ? objUser.name : "Ingrese el Nombre"}
              label="name"
              required
              handleChange={handleInput}
            />

            <Input
              type="tel"
              name="phone"
              placeholder={
                objUser.phone ? objUser.phone : "Ingrese el telefono"
              }
              label="Telefono"
              required
              //value="+524831212891"
              handleChange={handleInput}
            />

            <Input
              type="date"
              name="birthdate"
              //placeholder={objUser.birthdate?objUser.birthdate:"Ingrese su cumpleaños"}
              label="birthdate"
              value={objUser.birthdate ? objUser.birthdate : "2099/12/31"}
              handleChange={handleInput}
            />

            <Input
              type={'text'}
              name={'linkedin'}
              placeholder={
                objUser.linkedin ? objUser.linkedin : "Ingrese su direccion de Linkedin"
              }
              label={'linkedin'}
              //value={'https://www.linkedin.com/in/donramon'}
              handleChange={handleInput}
            />
          </form>

          <div className="profile__profesionalInfo">
            <h4>Professional information</h4>
            <form>
              <p>
                Changes made here will be reflected in your future applications
              </p>

              <Input
                type="text"
                name="tittle"
                placeholder={
                  objUser.tittle ? objUser.tittle : "Professional Multiservice"
                }
                label="tittle"
                //value="Professional Multiservice"
                handleChange={handleInput}
              />

              <TextArea
                name="experience"
                placeholder={
                  objUser.experience ? objUser.experience : "Professional Experience"
                }
                label="Professional Experience"
                handleChange={handleInput}
              />

              <TextArea
                name="education"
                placeholder={
                  objUser.education ? objUser.education : "Put your Education"
                }
                label="education"
                handleChange={handleInput}

                //value="Pellentesque ut mauris neque. Maecenas posuere sit amet erat at"
              />

              <label htmlFor="">Upload/Update your CV</label>
              <br />
              <FileInput
                name="FileInputBox"
                value=""
                label="Choose a File"
                caption=""
                handleChange={() => {}}
                accept=".pdf"
              />

              <br />
              <br />

              <Button
                type="primary"
                text="Save changes"
                handleClick={(e) => handleSave(e)}
              />
            </form>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
