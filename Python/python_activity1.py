name = input("Name: ")
attendance = int(input("Attendance: "))
grade1 = int(input("Subject 1: "))
grade2 = int(input("Subject 2: "))
grade3 = int(input("Subject 3: "))

print("\n")

average = (grade1 + grade2 + grade3) / 3
attendannce = (attendance / 100) * 100


print("Student Name:", name)
print("Average Grade:", average)
print(f"Attendance: {attendance}%")

if average >= 90 and attendance >= 85:
    print("With High Honors")
elif average >= 75 and attendance >= 75:
    print("With Honors")
else:
    print("need magreview")

print("\n")
