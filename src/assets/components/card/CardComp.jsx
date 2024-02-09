
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function CardComp (props) {
    return (
        <>
            <Card sx={{ minWidth: 275 }} className={props.classes}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                    {props.title}
                    </Typography>
                    {props.children}
                </CardContent>
            </Card>
        </>
    )
}


export default CardComp;