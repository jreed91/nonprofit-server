const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const SkillsSchema = new Schema({ name: String });
const VolunteersSchema = new Schema({ 
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    volunteer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Volunteer" },
    signUpDate: { type: Date, required: true },
    selected: { type: Boolean, required: true, default: false }
 });

const ProjectSchema = new Schema( {
    name: { type: String, required: true },
    description: { type: String, required: true },
    active: { type: Boolean, required: true },
    skills: { type: [SkillsSchema], required: false },
    organization_id: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
    volunteers: { type: [VolunteersSchema], required: false },
    type: { type: String, required: true}
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "Project", ProjectSchema );
module.exports = mongoose.model( "Skill", SkillsSchema );
module.exports = mongoose.model( "Volunteer", VolunteersSchema );
