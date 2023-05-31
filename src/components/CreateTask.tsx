import { Box, Button, TextField, Typography } from "@mui/material"

interface CreateTaskProps {
    onAdd: () => void;
    onTextFieldChange: () => void;
    textFieldValue: string;
}

const CreateTask = ({onAdd, onTextFieldChange, textFieldValue}: CreateTaskProps) => {
    return (
        <Box>
            <Typography sx={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>Create Task</Typography>
                <TextField sx={{
                    width: '100%',
                    marginTop: '2rem'
                }} value={textFieldValue} onChange={onTextFieldChange} label='e.g Wash Plates...' variant='outlined' />
                <Button fullWidth={true} sx={{
                    height: '3rem',
                    marginTop: '1rem'
                }} variant='contained' onClick={onAdd}>Add</Button>
        </Box>
    )
}

export default CreateTask