import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

interface TaskItemProps {
    title: string;
    onEdit: () => void;
    onDelete: () => void;
}

const TaskItem = ({title, onEdit, onDelete}: TaskItemProps) => {
    return (
        <Box sx={{
            display: 'flex',
            border: '1px solid #ccc',
            padding: '1rem',
            marginTop: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Typography sx={{
                fontSize: '1.5rem',
                fontWeight: 'normal',
                textAlign: 'center',
                alignSelf: 'center',
            }}>{title}</Typography>
            <Box sx={{
                display: 'flex',
                marginLeft: 'auto'
            }}>
                <IconButton onClick={onEdit} sx={{
                    marginLeft: 'auto',
                }} color='info' size='large'>
                    <Edit/>
                </IconButton>
                <IconButton onClick={onDelete} sx={{
                    marginLeft: 'auto',
                }} color='error' size='large'>
                    <Delete/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default TaskItem