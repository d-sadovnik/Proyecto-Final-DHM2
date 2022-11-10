"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Profile, Muscles, Exercises, Muscle_group, Predetermined_routines, Tracker_pred, Free_routine, Tracker_free
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/cargardatosgrupomuscular', methods=['GET'])
def cargar_datos():
    grupos_musculares = Muscle_group.query.all()
    if not grupos_musculares:
        new_grupo_muscular_1 = Muscle_group(
            id="1", muscle_group='Tren Superior')
        new_grupo_muscular_2 = Muscle_group(id="2", muscle_group='Core')
        new_grupo_muscular_3 = Muscle_group(
            id="3", muscle_group='Tren Inferior')

        db.session.add(new_grupo_muscular_1)
        db.session.add(new_grupo_muscular_2)
        db.session.add(new_grupo_muscular_3)

        db.session.commit()
    return jsonify({'msg': 'datos cargados'}), 200


@api.route('/cargardatosmusculo', methods=['GET'])
def cargar_musculos():
    musculos = Muscles.query.all()
    if not musculos:
        new_musculos_1 = Muscles(id="1", muscle_name='Triceps', groupid=1)
        new_musculos_2 = Muscles(id="2", muscle_name='Biceps', groupid=1)
        new_musculos_3 = Muscles(id="3", muscle_name='Back', groupid=1)
        new_musculos_4 = Muscles(id="4", muscle_name='Abs', groupid=2)
        new_musculos_5 = Muscles(id="5", muscle_name='Shoulder', groupid=1)
        new_musculos_6 = Muscles(id="6", muscle_name='Leg', groupid=3)
        new_musculos_7 = Muscles(id="7", muscle_name='Chest', groupid=1)
        new_musculos_8 = Muscles(id="8", muscle_name='Cardio', groupid=2)

        db.session.add(new_musculos_1)
        db.session.add(new_musculos_2)
        db.session.add(new_musculos_3)
        db.session.add(new_musculos_4)
        db.session.add(new_musculos_5)
        db.session.add(new_musculos_6)
        db.session.add(new_musculos_7)
        db.session.add(new_musculos_8)

        db.session.commit()

    return jsonify({'msg': 'datos cargados'}), 200


@api.route('/cargardatosejercicios', methods=['GET'])
def cargar_ejercicios():
    exercises = Exercises.query.all()
    if not exercises:
        new_exercises_1 = Exercises(id="1", name='DUMBBELL KICKBACK', burnt_calories=0, muscle_id=1,
                                    description="Kickback exercise works best with light to moderate weights and medium to high reps. Use the kickbacks as a finishing workout and really feel the pump.")
        new_exercises_2 = Exercises(id="2", name='BENT OVER KICKBACK', burnt_calories=0, muscle_id=1,
                                    description="The bent over kickback is an isolation exercise which builds strength and muscle in all three heads which make up the tricep muscle.Kickback exercise works best with light to moderate weights and medium to high reps. Use the kickbacks as a finishing workout and really feel the pump.")
        new_exercises_3 = Exercises(id="3", name='BENCH DIPS', burnt_calories=0, muscle_id=1, description="Bench dips are a compound exercise as they worked multiple muscle groups simultaneously. Although this bodyweight exercise mainly targets the triceps, it also hits your chest and front of your shoulder.Bench dips are one of the most effective exercises to increase arm strength and also build lean muscle in your upper arms.Bench dips are a closed kinetic chain exercise and express that you do the movements around a fixed point. It increases compression force on your joints thereby improving stability.")
        new_exercises_4 = Exercises(id="4", name='ONE ARM LYING TRICEPS EXTENSION', burnt_calories=0, muscle_id=1,
                                    description="Dumbbell lying triceps extension is a single joint isolating exercise that provides strength and muscle development. It is a effective exercise to develop the tricep muscle.")
        new_exercises_5 = Exercises(id="5", name='TRICEPS DIPS ON FLOOR', burnt_calories=0, muscle_id=1,
                                    description="Triceps dips on floor are a compound exercise as they worked multiple muscle groups simultaneously. Although this bodyweight exercise mainly targets the triceps, it also hits your chest and front of your shoulder.Triceps dips on floor are one of the most effective exercises to increase arm strength and also build lean muscle in your upper arms.")
        new_exercises_6 = Exercises(id="6", name='NARROW GRIP WALL PUSH-UP', burnt_calories=0, muscle_id=1,
                                    description="The Narrow Grip Wall Push-Up is an easy push-up variation that is preferred by those who are new to exercise or who cannot do push-ups as an alternative to doing push-ups. It is a compound exercise that requires no equipment and works multiple muscle groups at the same time.")
        new_exercises_7 = Exercises(id="7", name='SHOULDER STRETCH BEHIND BACK', burnt_calories=0, muscle_id=1,
                                    description="The Shoulder flexibility test is a simple flexibility test to determine whether the hands can be brought together from behind and to detect shoulder range of motion.Start by reaching your right arm overhead and behind your neck to touch your upper back.Lift your left arm and move it around your left side to your lower back, then slowly reach upward as far as possible toward your right hand.")
        new_exercises_8 = Exercises(id="8", name='BODY UPS', burnt_calories=0, muscle_id=1,
                                    description="Body Ups is an compound triceps exercise that increases arm strength and develop arm muscles. Although the focus is on the triceps muscles, it also works the chest, shoulder and back muscles.")
        new_exercises_9 = Exercises(id="9", name='BENCH DIPS ON FLOOR', burnt_calories=0, muscle_id=1,
                                    description="Triceps dips on floor are a compound exercise as they worked multiple muscle groups simultaneously. Although this bodyweight exercise mainly targets the triceps, it also hits your chest and front of your shoulder.Triceps dips on floor are one of the most effective exercises to increase arm strength and also build lean muscle in your upper arms.")
        new_exercises_10 = Exercises(id="10", name='CROSS ARM PUSH-UP', burnt_calories=0, muscle_id=1,
                                     description="Cross arm push-up are a more difficult variant of classic push-ups and are made by lifting your body weight by joining your hands in a crossover.")
        new_exercises_11 = Exercises(id="11", name='STANDING CALF RAISE', burnt_calories=0, muscle_id=6, description="")
        new_exercises_12 = Exercises(id="12", name='STANDING CROSS LEG HAMSTRING STRETCH', burnt_calories=0, muscle_id=6, description="")
        new_exercises_13 = Exercises(id="13", name='WEIGHTED DONKEY CALF RAISE', burnt_calories=0, muscle_id=6, description="")
        new_exercises_14 = Exercises(
            id="14", name='SQUAT HOLD CALF RAISE', burnt_calories=0, muscle_id=6, description="")
        new_exercises_15 = Exercises(
            id="15", name='STANDING HAMSTRING STRETCH', burnt_calories=0, muscle_id=6, description="")
        new_exercises_16 = Exercises(
            id="16", name='BAND FOOT EXTERNAL ROTATION', burnt_calories=0, muscle_id=6, description="")
        new_exercises_17 = Exercises(
            id="17", name='TOE EXTENSOR STRETCH', burnt_calories=0, muscle_id=6, description="")
        new_exercises_18 = Exercises(
            id="18", name='STANDING DORSIFLEXION', burnt_calories=0, muscle_id=6, description="")
        new_exercises_19 = Exercises(
            id="19", name='STANDING TOE FLEXOR STRETCH', burnt_calories=0, muscle_id=6, description="")
        new_exercises_20 = Exercises(
            id="20", name='POSTERIOR TIBIALIS STRETCH', burnt_calories=0, muscle_id=6, description="")
        new_exercises_21 = Exercises(id="21", name='DOUBLE ARM DUMBBELL CURL', burnt_calories=0, muscle_id=2,
                                     description="Dumbbell curl is also known as Biceps Curl. It is one of the most popular moves that comes to mind when you think of arm training.")
        new_exercises_22 = Exercises(id="22", name='DUMBBELL CURL', burnt_calories=0, muscle_id=1,
                                     description="Dumbbell curl is also known as Biceps Curl. It is one of the most popular moves that comes to mind when you think of arm training.")
        new_exercises_23 = Exercises(id="23", name='SEATED İNCLINE DUMBBELL CURL', burnt_calories=0, muscle_id=2, description="Incline dumbbell curl is an isolation exercise that works the long head of your biceps, stretches it and helps it in contracting with more force during the exercise. If your goal is to get stronger and bigger arms, you can add incline dumbbell curls to your exercise routine.The primary target of incline dumbbell curl movement is the biceps brachii muscle. Additionally, you can use this movement to correct symmetry issues. (for example, if one bicep is bigger than another)")
        new_exercises_24 = Exercises(id="24", name='ONE ARM CABLE CURL', burnt_calories=0, muscle_id=2,
                                     description="The one arm cable curl is an isolation exercise for the biceps muscle. It’s a pulling action performed with a cable machine and is suitable for beginners. The cable keeps tension on your biceps during both the lowering and the lifting part of each rep so they are always engaged. The cable’s constant tension means you work your biceps hard.")
        new_exercises_25 = Exercises(id="25", name='DUMBBELL REVERSE CURL', burnt_calories=0, muscle_id=2,
                                     description="The first target of this exercise is the brachioradialis muscle. The brachioradialis is a superficial forearm muscle located in the lateral forearm.The development of the brachioradialis muscle helps to strengthen your grip and can make your arm muscles appear stronger and more voluminous.")
        new_exercises_26 = Exercises(id="26", name='STANDING ONE ARM CHEST STRETCH',
                                     burnt_calories=0, muscle_id=2, description="")
        new_exercises_27 = Exercises(
            id="27", name='BAND BICEPS CURL', burnt_calories=0, muscle_id=2, description="")
        new_exercises_28 = Exercises(id="28", name='SINGLE DUMBBELL SPIDER HAMMER CURL', burnt_calories=0, muscle_id=2,
                                     description="Dumbbell curl is also known as Biceps Curl. It is one of the most popular moves that comes to mind when you think of arm training.")
        new_exercises_29 = Exercises(id="29", name='HAMMER CURL WITH RESISTANCE BAND', burnt_calories=0, muscle_id=2,
                                     description="Dumbbell curl is also known as Biceps Curl. It is one of the most popular moves that comes to mind when you think of arm training.")
        new_exercises_30 = Exercises(id="30", name='WATER BOTTLE HAMMER CURL', burnt_calories=0, muscle_id=2,
                                     description="Dumbbell curl is also known as Biceps Curl. It is one of the most popular moves that comes to mind when you think of arm training.")
        new_exercises_31 = Exercises(id="31", name='PULL-UP', burnt_calories=0, muscle_id=3,
                                     description="When it comes to compound exercises, one of the best exercises that comes to mind is probably the pull-up movement. Pull-up is a closed-chain an exercise that works almost all of the muscle groups on the upper body and provides both hypertrophy and strength at body weight.")
        new_exercises_32 = Exercises(id="32", name='CABLE REAR PULLDOWN', burnt_calories=0, muscle_id=1,
                                     description="Cable Rear Lat Pulldown is one of the most popular exercises used to strengthen the back muscles. Pulldown V-Taper is among the movements that allow you to reach the image.")
        new_exercises_33 = Exercises(id="33", name='LAT PULLDOWN', burnt_calories=0, muscle_id=3,
                                     description="Lat pulldown is one of the most popular exercises used to strengthen the back muscles. Pulldown V-Taper is among the movements that allow you to reach the image. It provides interaction in teres minor and teres major muscle groups for the development of the rear shoulder and wing muscles. In this way, you can create a wider back, wing and shoulder structure.")
        new_exercises_34 = Exercises(id="34", name='LEVER FRONT PULLDOWN', burnt_calories=0, muscle_id=3,
                                     description="Lat pulldown is one of the most popular exercises used to strengthen the back muscles. Pulldown V-Taper is among the movements that allow you to reach the image. It provides interaction in teres minor and teres major muscle groups for the development of the rear shoulder and wing muscles. In this way, you can create a wider back, wing and shoulder structure.")
        new_exercises_35 = Exercises(id="35", name='SEATED CABLE ROW', burnt_calories=0, muscle_id=3,
                                     description="Many of the movements that work the same muscle group may look alike, but they focus on different parts of the muscles because they are at different angles. If you want to build better muscle specifically, keep in mind that it is more beneficial to include exercises that focus on different aspects to your training program.")
        new_exercises_36 = Exercises(id="36", name='ONE ARM CABLE ROW', burnt_calories=0, muscle_id=3,
                                     description="One arm cable row is a pulling exercise that works the back muscles in general, particularly the latissimus dorsi.")
        new_exercises_37 = Exercises(id="37", name='ACROSS CHEST SHOULDER STRETCH', burnt_calories=0, muscle_id=3,
                                     description="Shoulder stretches can help relieve muscle tension, pain, and tightness in the neck and shoulders. Including shoulder-specific exercises and stretches in your overall workout program may help increase your shoulder mobility and flexibility. These movements may also build strength in your shoulders, improve your shoulder function, and prevent injury.In addition, this stretching movement benefits the triceps, and back muscles.")
        new_exercises_38 = Exercises(id="38", name='INCLINE DUMBBELL ROW', burnt_calories=0, muscle_id=3,
                                     description="Many of the movements that work the same muscle group may look alike, but they focus on different parts of the muscles because they are at different angles. If you want to build better muscle specifically, keep in mind that it is more beneficial to include exercises that focus on different aspects to your training program.")
        new_exercises_39 = Exercises(id="39", name='BACK PEC STRETCH', burnt_calories=0, muscle_id=3, description="Stretches can help relieve muscle tension, pain, and tightness in the neck and shoulders. Including shoulder-specific exercises and stretches in your overall workout program may help increase your shoulder mobility and flexibility. These movements may also build strength in your shoulders, improve your shoulder function, and prevent injury.In addition, this stretching movement benefits the triceps, and back muscles.")
        new_exercises_40 = Exercises(
            id="40", name='', burnt_calories=0, muscle_id=3, description="se repite 40 con 38")
        new_exercises_41 = Exercises(id="41", name='MOUNTAIN CLIMBER', burnt_calories=0, muscle_id=4,
                                     description="Assume a normal press-up position with your weight on your hands and toes, your back and legs straight, and your hands shoulder-width apart.")
        new_exercises_42 = Exercises(id="42", name='CROSS BODY MOUNTAIN CLIMBER',
                                     burnt_calories=0, muscle_id=4, description="se repite")
        new_exercises_43 = Exercises(id="43", name='SEATED BENCH LEG PULL-IN', burnt_calories=0, muscle_id=4,
                                     description="This exercise is one of the most effective movements that work your abdominal muscles.")
        new_exercises_44 = Exercises(id="44", name='CRUNCHES', burnt_calories=0, muscle_id=4, description="Crunch movement is one of the most basic exercises designed to strengthen the core muscles of the body. Exercise helps to strengthen core muscles, improve posture, and increase muscle mobility and flexibility.Improves six pack muscles: When crunch exercise is done, the rectus abdominus and oblique muscles are tightened, so the upper abdominal muscles and six pack muscles develop.")
        new_exercises_45 = Exercises(id="45", name='CROSS CRUNCH',
                                     burnt_calories=0, muscle_id=4, description="se repite 44 y 45")
        new_exercises_46 = Exercises(id="46", name='LEG RAISE', burnt_calories=0, muscle_id=4,
                                     description="Leg raise is one of the most effective exercises for the lower abdominal muscles.")
        new_exercises_47 = Exercises(id="47", name='ALTERNATE LEG RAISES', burnt_calories=0, muscle_id=4,
                                     description="Leg raise is one of the most effective exercises for the lower abdominal muscles.")
        new_exercises_48 = Exercises(id="48", name='BICYCLE CRUNCH', burnt_calories=0, muscle_id=4, description="In a study conducted by the American Council of Exercise, the Bicycle crunch exercise is described as one of the most effective exercises that best work the rectus abdominus, strengthen the abdominal muscles and support six-pack formation.Bicycle Crunch also targets your hip flexors. While your rectus abdominus muscle stabilizes your core during exercise, your hip flexors take on the task of raising your knees. By combining upper and lower body at the same time, the muscles work in harmony. This situation is very beneficial in terms of your mobility and flexibility.")
        new_exercises_49 = Exercises(id="49", name='LYING SCISSOR KICK', burnt_calories=0, muscle_id=4,
                                     description="Lying scissor kick targets all of your abdominal muscles, especially the lower regions. movements.")
        new_exercises_50 = Exercises(id="50", name='DEAD BUG', burnt_calories=0, muscle_id=4, description="Dead bug movement, which is frequently used in Pilates, yoga and abdominal training, is an exercise designed to strengthen your general stability and core. This movement is a functional core strengthening exercise that works the muscles in the lower and upper body.Dead bug is also an exercise that requires mental focus, forces movements to be made in harmony, and helps improve balance and coordination.")
        new_exercises_51 = Exercises(id="51", name='ARM SCISSORS', burnt_calories=0, muscle_id=5,
                                     description="Stand with your feet shoulder width apart.Lift your arms at shoulder height and cross them in front of your chest.Change the other arm on the top each time you cross.")
        new_exercises_52 = Exercises(id="52", name='SIDE ARM RAISES', burnt_calories=0, muscle_id=5,
                                     description="Stand with your arms at your sides.Keep your back and arms straightRaise your arms to your sides at shoulder height.Exhale as you raise your arms, and inhale as you lower them.Return and repeat.")
        new_exercises_53 = Exercises(id="53", name='ARM CIRCLES', burnt_calories=0, muscle_id=5,
                                     description="The arm circle is a type of dynamic warm-up. Doing arm circles before starting a workout is a practical way to increase range of motion in the joints. Also, if you add this exercise to the beginning of your training program, it will warm up your shoulders, trapezius, chest, arms and upper back muscles.")
        new_exercises_54 = Exercises(id="54", name='CABLE LATERAL RAISE', burnt_calories=0, muscle_id=5, description="Cable lateral raise is the most popular shoulder development and strengthening exercise targeting the lateral deltoid.Lateral raise exercise with cable machines provides constant tension and continuous resistance while lifting and lowering the weight. Because muscle growth and strength gains are directly dependent on how much the muscle is stretched during exercise, cable machines tire the muscles faster and provide greater strength gain.")
        new_exercises_55 = Exercises(id="55", name='ALTERNATING DUMBBELL FRONT RAISE', burnt_calories=0, muscle_id=5,
                                     description="The Dumbbell front raise is a isole exercise that targets the fronts and sides of the shoulders.")
        new_exercises_56 = Exercises(id="56", name='DUMBBELL FRONT RAISE', burnt_calories=0, muscle_id=5,
                                     description="The Dumbbell front raise is a isole exercise that targets the fronts and sides of the shoulders.")
        new_exercises_57 = Exercises(id="57", name='CABLE FRONT RAISE', burnt_calories=0, muscle_id=5, description="Cable front raise is the most popular shoulder development and strengthening exercise targeting the anterior deltoid.Front raise exercise with cable machines provides constant tension and continuous resistance while lifting and lowering the weight. Because muscle growth and strength gains are directly dependent on how much the muscle is stretched during exercise, cable machines tire the muscles faster and provide greater strength gain.")
        new_exercises_58 = Exercises(id="58", name='BODYWEIGHT MILITARY PRESS', burnt_calories=0, muscle_id=5,
                                     description="Bodyweight military press work the muscles surrounding the scapula and shoulder for both dynamic and static stability. It is a frequently used exercise for upright posture and postural disorders.")
        new_exercises_59 = Exercises(id="59", name='BAND PULL-APART', burnt_calories=0, muscle_id=5, description="The band pull-apart is a great strengthening exercise that effectively works many muscles, including the shoulder, rotator cuff, and trapezius muscles. By affecting the infraspinatus and subscapula muscles that cover the scapula, it can help protect you from ailments caused by muscle weakness such as posture disorder and scapula protrusion. in addition strengthening these muscles using the band pull-apart exercise will help improve poor posture, promote an upright stance, and improve balance.")
        new_exercises_60 = Exercises(id="60", name='ONE ARM KETTLEBELL SNATCH', burnt_calories=0, muscle_id=7,
                                     description="The one-arm kettlebell snatch is primarily considered a strength and cardio exercise. It develops the entire posterior chain of the body while building strength, coordination, and cardiovascular fitness simultaneously.")
        new_exercises_61 = Exercises(id="61", name='ARM SCISSORS', burnt_calories=0, muscle_id=7,
                                     description="Stand with your feet shoulder width apart.Lift your arms at shoulder height and cross them in front of your chest.Change the other arm on the top each time you cross.")
        new_exercises_62 = Exercises(id="62", name='LOW CABLE CROSSOVER', burnt_calories=0, muscle_id=7,
                                     description="This movement, which is performed on a machine with cables, is one of the chest movements that you can exercise your chest muscles from a to z in the most efficient way. You can target your lower, upper and middle chest muscles separately by changing the height of the cables on the station.")
        new_exercises_63 = Exercises(id="63", name='HIGH CABLE CROSSOVER', burnt_calories=0, muscle_id=7,
                                     description="The high to low cable crossover is an effective chest isolation exercise that focuses on the mid chest and lower chest. The higher the cables are the more you’ll emphasize your lower pecs. The lower the cables, and the more you’ll target the upper pecs.")
        new_exercises_64 = Exercises(id="64", name='CABLE UPPER CHEST CROSSOVERS', burnt_calories=0, muscle_id=7, description="This cable workout is an exercise designed to builder your upper chest muscles, increase range of motion, and strengthen the chest muscles.In cases where the upper chest muscles are not developed, chest exercises that work at different angles can be beneficial, but one thing you should pay attention to in this exercise is that it includes the front shoulder muscles in the movement while doing the exercise. Cable exercises are effective as they provide continuous resistance, but it is recommended to work with proper form and low weights so that most of the load is not placed on the shoulders.")
        new_exercises_65 = Exercises(id="65", name='CABLE CROSSOVER', burnt_calories=0, muscle_id=7, description="Cable crossover exercise is an excellent exercise to stretch your chest muscles, increase the range of motion and shred chest muscles. There are 3 types of movement. These types vary depending on how you use the station. In the pulley system, your direction of pulling the cables and the height you connect the rope allow you to target the upper, middle and lower parts of your chest muscles separately.The tension in the cable provides a softer and more continuous resistance than free weights that can be affected by momentum. Thanks to constant resistance, it triggers the work of many small stabilizing muscles in your chest in addition to the pectoral muscles.")
        new_exercises_66 = Exercises(id="66", name='SINGLE-ARM CABLE CROSSOVER', burnt_calories=0, muscle_id=7, description="The single arm cable crossover is an upper body exercise that targets the chest muscles. Working the chest one side at a time allows you to focus on the balance between the sides of your chest and really feel the chest muscles contracting. The tension in the cable provides a softer and more continuous resistance than free weights that can be affected by momentum. In addition, performing the exercise on each arm separately allows both chest to work equally")
        new_exercises_67 = Exercises(id="67", name='REVERSE GRIP INCLINE DUMBBELL PRESS', burnt_calories=0, muscle_id=7,
                                     description="The reverse grip incline dumbbell press is an upper-body exercise targeting the upper pectoral muscles. The reverse grip helps keep your elbows in and your upper arms parallel to your torso.")
        new_exercises_68 = Exercises(id="68", name='WALL PUSH-UP', burnt_calories=0, muscle_id=7,
                                     description="Wall push-ups are an easier option for people who are just starting out or cannot do classic push-ups.Wall Push-Up requires more than one joint to work simultaneously while forcing your body to stabilize. It helps to increase performance by working other muscle groups to stabilize your body and gain strength.")
        new_exercises_69 = Exercises(id="69", name='KNEELING PUSH-UP', burnt_calories=0, muscle_id=7,
                                     description="Kneeling push-ups are an easier option for beginners or those who can’t do push-ups. Although the push-up mainly targets the chest muscles, it is a bodyweight exercise that works your triceps and front shoulder muscles.")
        new_exercises_70 = Exercises(id="70", name='INCLINE PUSH-UP', burnt_calories=0, muscle_id=7,
                                     description=" Although the push-up mainly targets the chest muscles, it is a bodyweight exercise that works your triceps and front shoulder muscles.")
        new_exercises_71 = Exercises(id="71", name='WALKING', burnt_calories=0, muscle_id=8,
                                     description="Walking is one of the simplest physical activities. This simple activity allows you to work many large and small muscle groups in your lower body.")
        new_exercises_72 = Exercises(
            id="72", name='RIDING OUTDOOR BICYCLE', burnt_calories=8, muscle_id=8, description="")
        new_exercises_73 = Exercises(id="73", name='BRISKLY WALKING', burnt_calories=0, muscle_id=8,
                                     description="Walking is one of the simplest physical activities. This simple activity allows you to work many large and small muscle groups in your lower body.")
        new_exercises_74 = Exercises(id="74", name='RUNNING', burnt_calories=0, muscle_id=8,
                                     description="Walking is a great tool to prepare your body for running. Your walking in start should consist of a mixture of running and walking depending on how much pressure your body can take. As time passes your muscles get trained and you are good to go for running.")
        new_exercises_75 = Exercises(
            id="75", name='JUMP ROPE', burnt_calories=0, muscle_id=5, description="")
        new_exercises_76 = Exercises(
            id="76", name='ELBOW TO KNEE TWIST', burnt_calories=0, muscle_id=8, description="")
        new_exercises_77 = Exercises(
            id="77", name='PUSH-UP TOE TOUCH', burnt_calories=0, muscle_id=8, description="")
        new_exercises_78 = Exercises(id="78", name='MOUNTAIN CLIMBER', burnt_calories=0, muscle_id=8,
                                     description="Assume a normal press-up position with your weight on your hands and toes, your back and legs straight, and your hands shoulder-width apart.")
        new_exercises_79 = Exercises(id="79", name='BICYCLE CRUNCH', burnt_calories=0, muscle_id=8,
                                     description="In a study conducted by the American Council of Exercise, the Bicycle crunch exercise is described as one of the most effective exercises that best work the rectus abdominus, strengthen the abdominal muscles and support six-pack formation.")
        new_exercises_80 = Exercises(id="80", name='T-CROSS SIT-UP', burnt_calories=0, muscle_id=8,
                                     description="It works all the abdominal muscles: The T-Cross sit-up exercise targets the rectus abdominus and oblique muscles.")

        db.session.add(new_exercises_1)
        db.session.add(new_exercises_2)
        db.session.add(new_exercises_3)
        db.session.add(new_exercises_4)
        db.session.add(new_exercises_5)
        db.session.add(new_exercises_6)
        db.session.add(new_exercises_7)
        db.session.add(new_exercises_8)
        db.session.add(new_exercises_9)
        db.session.add(new_exercises_10)
        db.session.add(new_exercises_11)
        db.session.add(new_exercises_12)
        db.session.add(new_exercises_13)
        db.session.add(new_exercises_14)
        db.session.add(new_exercises_15)
        db.session.add(new_exercises_16)
        db.session.add(new_exercises_17)
        db.session.add(new_exercises_18)
        db.session.add(new_exercises_19)
        db.session.add(new_exercises_20)
        db.session.add(new_exercises_21)
        db.session.add(new_exercises_22)
        db.session.add(new_exercises_23)
        db.session.add(new_exercises_24)
        db.session.add(new_exercises_25)
        db.session.add(new_exercises_26)
        db.session.add(new_exercises_27)
        db.session.add(new_exercises_28)
        db.session.add(new_exercises_29)
        db.session.add(new_exercises_30)
        db.session.add(new_exercises_31)
        db.session.add(new_exercises_32)
        db.session.add(new_exercises_33)
        db.session.add(new_exercises_34)
        db.session.add(new_exercises_35)
        db.session.add(new_exercises_36)
        db.session.add(new_exercises_37)
        db.session.add(new_exercises_38)
        db.session.add(new_exercises_39)
        db.session.add(new_exercises_40)
        db.session.add(new_exercises_41)
        db.session.add(new_exercises_42)
        db.session.add(new_exercises_43)
        db.session.add(new_exercises_44)
        db.session.add(new_exercises_45)
        db.session.add(new_exercises_46)
        db.session.add(new_exercises_47)
        db.session.add(new_exercises_48)
        db.session.add(new_exercises_49)
        db.session.add(new_exercises_50)
        db.session.add(new_exercises_51)
        db.session.add(new_exercises_52)
        db.session.add(new_exercises_53)
        db.session.add(new_exercises_54)
        db.session.add(new_exercises_55)
        db.session.add(new_exercises_56)
        db.session.add(new_exercises_57)
        db.session.add(new_exercises_58)
        db.session.add(new_exercises_59)
        db.session.add(new_exercises_60)
        db.session.add(new_exercises_61)
        db.session.add(new_exercises_62)
        db.session.add(new_exercises_63)
        db.session.add(new_exercises_64)
        db.session.add(new_exercises_65)
        db.session.add(new_exercises_66)
        db.session.add(new_exercises_67)
        db.session.add(new_exercises_68)
        db.session.add(new_exercises_69)
        db.session.add(new_exercises_70)
        db.session.add(new_exercises_71)
        db.session.add(new_exercises_72)
        db.session.add(new_exercises_73)
        db.session.add(new_exercises_74)
        db.session.add(new_exercises_75)
        db.session.add(new_exercises_76)
        db.session.add(new_exercises_77)
        db.session.add(new_exercises_78)
        db.session.add(new_exercises_79)
        db.session.add(new_exercises_80)

        db.session.commit()
    return jsonify({'msg': 'datos cargados'}), 200
