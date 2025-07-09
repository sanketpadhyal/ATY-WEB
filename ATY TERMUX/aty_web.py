import time
import os

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

def type_text(text, delay=0.03):
    for char in text:
        print(char, end='', flush=True)
        time.sleep(delay)
    print()

def main_ui():
    clear()
    print("\033[1;36m" + "=" * 60)
    type_text("🌐  Welcome to ATY WEB Terminal Version", 0.04)
    print("=" * 60)

    print("\n\033[1;32mAll Things You Need — Compared Smartly\n")
    time.sleep(0.5)

    print("\033[1;37m✨ Fast   💻 Terminal Based   🎨 Stylish\n")
    time.sleep(0.5)

    print("\033[1;34m[🔗] Paste your Amazon product link below to start (simulation):")
    link = input("\033[1;30m> ")

    print("\n\033[1;32m🔍 Searching for similar products on other platforms", end="")
    for _ in range(3):
        time.sleep(0.5)
        print(".", end="", flush=True)
    time.sleep(0.5)

    print("\n\n\033[1;36m✔️  Results Found (Simulated)")
    print("-" * 50)
    print("🛒 Flipkart: ₹999   →  [PROFIT: ₹200 ✅]")
    print("🛒 Snapdeal: ₹1050  →  [LOSS: ₹50 ❌]")
    print("🛒 Croma: ₹970      →  [PROFIT: ₹230 ✅]")
    print("-" * 50)

    time.sleep(0.5)
    print("\n\033[1;35mMade with ❤️ by SANKET PADHYAL ~ VORTEXBYTE")
    print("\033[2;37mCurrently Demo Version V2 is in Work Process 🚧\n")
    print("\033[1;36mThank you for using ATY WEB Terminal ✨\n")

# Start the program
main_ui()