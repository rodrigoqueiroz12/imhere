import {
	Alert,
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"
import { useState } from "react"

export function Home() {
	const [participants, setParticipants] = useState<string[]>([])
	const [participantName, setParticipantName] = useState("")

	function handleParticipantAdd() {
		if (participants.includes(participantName)) {
			return Alert.alert(
				"Participante já existe",
				`Já existe um usuário com o nome ${participantName}`
			)
		}

		setParticipants(prevState => [...prevState, participantName])
		setParticipantName("")
	}

	function handleParticipantRemove(name: string) {
		return Alert.alert("Remover", `Remover participante ${name}?`, [
			{
				text: "Cancelar",
				style: "cancel",
			},
			{
				text: "Remover",
				onPress: () =>
					setParticipants(state =>
						state.filter(participant => participant !== name)
					),
			},
		])
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>
			<Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor="#6b6b6b"
					onChangeText={setParticipantName}
					value={participantName}
				/>

				<TouchableOpacity
					style={styles.button}
					onPress={() => handleParticipantAdd()}
				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				data={participants}
				showsVerticalScrollIndicator={false}
				keyExtractor={item => item}
				renderItem={({ item }) => {
					return (
						<Participant
							key={item}
							name={item}
							onRemove={() => handleParticipantRemove(item)}
						/>
					)
				}}
				ListEmptyComponent={() => {
					return (
						<Text style={styles.emptyParticipantsText}>
							Ninguém chegou ao evento ainda
						</Text>
					)
				}}
			/>
		</View>
	)
}
