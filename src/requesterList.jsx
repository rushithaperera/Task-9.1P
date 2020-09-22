import './requesterList.css'
import React from 'react'
import Card from './Card'
var Faker = require('faker');

const RequesterList = () =>
{
    return <div>
            <div className="row">
            <Card 
            avatar = {Faker.image.avatar()}
            firstname = {Faker.name.firstName()}
            position = {Faker.lorem.sentences()}
            />

            <Card 
            avatar = {Faker.image.avatar()}
            firstname = {Faker.name.firstName()}
            position = {Faker.lorem.sentences()}
            />

            <Card 
            avatar = {Faker.image.avatar()}
            firstname = {Faker.name.firstName()}
            position = {Faker.lorem.sentences()}
            />
            </div>

            <div className = "row">
            <Card 
            avatar = {Faker.image.avatar()}
            firstname = {Faker.name.firstName()}
            position = {Faker.lorem.sentences()}
            />

            <Card 
            avatar = {Faker.image.avatar()}
            firstname = {Faker.name.firstName()}
            position = {Faker.lorem.sentences()}
            />

            <Card 
            avatar = {Faker.image.avatar()}
            firstname = {Faker.name.firstName()}
            position = {Faker.lorem.sentences()}
            />
            </div>
        </div>
    
}

export default RequesterList