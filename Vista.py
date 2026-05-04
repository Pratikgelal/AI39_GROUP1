import speech_recognition as sr
import pyttsx3




# Run the app

# Initialize text-to-speech engine
engine = pyttsx3.init()
voices = engine.getProperty('voices')

# Set voice properties
engine.setProperty('voice', voices[0].id)
engine.setProperty('rate', 150)
engine.setProperty('volume', 1.0)

# Function to speak text
def speak(text):
    print(f"Speaking: {text}")
    engine.say(text)
    engine.runAndWait()

# Function to listen to speech
def listen():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source, duration=1)
        audio = recognizer.listen(source, timeout=5)
        try:
            text = recognizer.recognize_google(audio)
            print(f"You said: {text}")
            
            return text
        except sr.UnknownValueError:
            print("Sorry, I didn't catch that.")
            return None
        except sr.RequestError:
            print("Speech recognition service is unavailable.")
            return None
        except sr.WaitTimeoutError:
            print("No speech detected.")
            return None

# Main talking loop
def main():
    speak("Hello , I am Project Vista, ")
    
    while True:
        try:
            user_input = listen()
            
            if user_input:
                if user_input.lower() in ['exit', 'quit', 'stop', 'goodbye', 'bye']:
                    speak("Goodbye!")
                    break
                else:
                    speak(f"You said: {user_input}")
            else:
                speak("I didn't catch that. Please try again.")
            
        except KeyboardInterrupt:
            speak("Goodbye!")
            break
        except Exception as e:
            print(f"An error occurred: {e}")
            speak("Sorry, something went wrong. Let's try again.")
            break

if __name__ == "__main__":
    main()