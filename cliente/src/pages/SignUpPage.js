import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { useState} from "react";

function SignUpPage() {
	const [body, setBody] = useState({ nickname: '', password: '' })

	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {
		console.log(body)
	}
	return (
		<Grid container component='main'>
			<CssBaseline />
			<Container component={Paper} elevation={5} maxWidth='xs'>
				<div>
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
					<Typography component='h1' variant='h5'>Sign In</Typography>
					<form>
						<TextField
							fullWidth
							autoFocus
							color='success'
							margin='normal'
							variant='outlined'
							label='Nickname'
							name='nickname'
							value={body.nickname}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							type='password'
							color='success'
							margin='normal'
							variant='outlined'
							label='Password'
							name='password'
							value={body.password}
							onChange={handleChange}
						/>
						<Button
							fullWidth
							variant='contained'
							color='success'
							onClick={() => onSubmit()}
						>
							Sign In
						</Button>
					</form>
				</div>
			</Container>
		</Grid>
	)
}

export default SignUpPage;