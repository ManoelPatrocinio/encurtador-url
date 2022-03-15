import mongoose from 'mongoose'
import 'dotenv/config'
export class MongoConnection {
	public async connect(): Promise<void> {
		try {
			const mongoURI = process.env.MONGO_CONNECTION
			await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
			console.log('Database connected')
		} catch (err) {
			console.error(err.message)
			process.exit(1)
		}
	}
}
