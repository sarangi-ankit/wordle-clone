import userEvent from "@testing-library/user-event";
import React from "react"
import { render, fireEvent,cleanup ,screen} from "../../../test-utils";
import useReducer  from '../../../features/userSlice';

import Login from "../Login"

// jest.mock('../../../features/userSlice')

describe('Login',()=>{

    afterEach(()=>{
        jest.clearAllMocks()
    })
    
    it("login function" , ()=>{
        render(<Login/>)
        
        expect(screen.getByTestId('apptest')).toBeInTheDocument()
    })
    it("form function" , ()=>{
        render(<Login/>)
        const frm = screen.getByTestId("formtest");
        expect(frm).toBeInTheDocument();
        // expect(useReducer).toHaveBeenCalledWith();
    })
    it("button function" , ()=>{
        render(<Login/>)
        const btn = screen.getByText("Login");
        userEvent.click(btn)
        expect(btn).toBeInTheDocument();
        // expect(useReducer).toHaveBeenCalledWith();
    })

    it('render email input', () => {
        render(<Login />);
        
        const inputEl = screen.getByTestId("email-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "email");
      });

      it('pass valid email to test email input field', () => {
        render(<Login />);
     
        const inputEl = screen.getByTestId("email-input");
        userEvent.type(inputEl, "test@mail.com");
     
        expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
      });

      it('render password input', () => {
        render(<Login />);
     
        const inputEl = screen.getByTestId("password-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "password");
      });
})

