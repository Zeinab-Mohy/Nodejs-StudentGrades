
let { students } = require("../data/students")
const express = require('express');

const getAllStudents = (req,res)=>{
    res.status(200).json(students); 
}

const addStudents = (req,res)=>{
    const student = req.body;
    students.push(student);
    res.status(202).json(student);
}

const getSingleStudent = (req,res)=>{
    const studentId = +req.params.studentId;
    const student = students.find((student)=>student.id===studentId);
    // console.log(student);
    if(student == undefined){
        res.json({"msg":`there is not such a student with id ${studentId}`});
    }else{
        res.status(200).json(student);
    }
}

const updateStudenet = (req,res)=>{
    const studentId = +req.params.studentId;
    let newStudenet = req.body;
    let student = students.find((student)=>student.id===studentId);
    student = {...student,...newStudenet};
    res.status(200).json(student);
}

const deleteStudenet = (req,res)=>{
    const studentId = +req.params.studentId;
    const newStudenets = students.filter((student)=>student.id!=studentId);
    if(newStudenets.length==students.length){
        res.status(404).json({"msg":`there is not such a student with id ${studentId}`});
    }else{
        res.status(200).json(newStudenets);
    }
    // console.log(newStudenets);
}

module.exports = {
    getAllStudents,
    addStudents,
    getSingleStudent,
    updateStudenet,
    deleteStudenet
}