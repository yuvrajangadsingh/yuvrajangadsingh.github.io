import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WorkoutPlan() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setIsReady(true);
    }
  }, [router.isReady]);

  if (!isReady) {
    // Optionally, show a loading spinner here
    return null;
  }

  const secret = router.query.key;
  if (secret !== 'sss303') {
    return (
      <div className="p-6 text-center">
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <h2 className="text-xl font-semibold mt-10">Access Denied</h2>
        <p>This page is private. Please provide the correct key in the URL.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="p-2 p-md-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-2">⚡ Full Workout Plan</h1>

        {/* Monday */}
        <section className="bg-white p-4 rounded-lg mb-2">
          <h2 className="text-2xl font-semibold">
            Monday - Upper Body (Push + Pull)
          </h2>
          <div
            className="mt-2 p-2 p-md-4 rounded"
            style={{ backgroundColor: '#cfe2f3' }}
          >
            <h3 className="font-semibold">Warm-up:</h3>
            <ul className="list-disc list-inside">
              <li>3-5 mins Treadmill Walk (4.5-5 km/h)</li>
              <li>Arm Circles - 20 sec each direction</li>
              <li>Arm Swings - 20 sec</li>
              <li>Torso Twists - 20 sec</li>
              <li>Bodyweight Squats - 15 reps</li>
            </ul>
          </div>
          <h3 className="font-semibold mt-4">Workout:</h3>
          <ul className="list-disc list-inside">
            <li>Incline Barbell Bench Press - 4x8-10</li>
            <li>Bent Over Barbell Row - 4x10</li>
            <li>Dumbbell Shoulder Press (Seated) - 3x10</li>
            <li>Lat Pulldown (Wide Grip) - 3x12</li>
            <li>Dumbbell Lateral Raises - 3x15</li>
            <li>Pushups (Burnout) - 2 sets to failure</li>
          </ul>
          <div
            className="mt-2 p-2 p-md-4 rounded"
            style={{ backgroundColor: '#cfe2f3' }}
          >
            <h3 className="font-semibold">Post Strength Cardio:</h3>
            25 mins Treadmill Walk (5.2 km/h, 7% incline)
          </div>
          <div
            className="mt-2 p-2 p-md-4 rounded"
            style={{ backgroundColor: '#fff3cd' }}
          >
            <h3 className="font-semibold">Arm Finisher:</h3>
            <ul className="list-disc list-inside">
              <li>Dumbbell Bicep Curls - 3x12</li>
              <li>Rope Tricep Pushdowns - 3x15</li>
            </ul>
          </div>
        </section>
        <hr className="my-4" />
        {/* Tuesday */}
        <section className="bg-white p-4 rounded-lg mb-2">
          <h2 className="text-2xl font-semibold">
            Tuesday - Lower Body (Quads + Glutes + Core)
          </h2>
          <div
            className="mt-2 p-2 p-md-4 rounded"
            style={{ backgroundColor: '#cfe2f3' }}
          >
            <h3 className="font-semibold">Warm-up:</h3>
            <ul className="list-disc list-inside">
              <li>3-5 mins Treadmill Walk (Flat)</li>
              <li>Hip Circles - 15 sec each side</li>
              <li>Leg Swings - 15 each leg</li>
              <li>Bodyweight Lunges - 10 per leg</li>
            </ul>
          </div>
          <h3 className="font-semibold mt-4">Workout:</h3>
          <ul className="list-disc list-inside">
            <li>Barbell Squats - 4x8</li>
            <li>Romanian Deadlifts - 4x10</li>
            <li>Walking Lunges (Dumbbells) - 3x12 steps each leg</li>
            <li>Leg Press - 3x12</li>
            <li>Seated Calf Raises - 3x20</li>
            <li>Hanging Leg Raises - 3x15</li>
          </ul>
          <div
            className="mt-2 p-2 p-md-4 rounded"
            style={{ backgroundColor: '#cfe2f3' }}
          >
            <h3 className="font-semibold">Post Strength Cardio:</h3>
            20 mins Treadmill Walk (5.0 km/h, 8% incline)
          </div>
        </section>
        <hr className="my-4" />
        {/* Wednesday */}
        <section className="bg-white p-4 rounded-lg mb-2">
          <h2 className="text-2xl font-semibold">
            Wednesday - Active Recovery
          </h2>
          <h3 className="font-semibold mt-4">Activities:</h3>
          <ul className="list-disc list-inside">
            <li>Brisk Walk (Treadmill or Outdoor) - 40 mins (4.5-5 km/h)</li>
            <li>Full Body Stretching - 15-20 mins</li>
          </ul>
        </section>
        <hr className="my-4" />
        {/* Thursday */}
        <section className="bg-white p-4 rounded-lg mb-2">
          <h2 className="text-2xl font-semibold">
            Thursday - Full Body Strength + HIIT
          </h2>
          <div
            className="mt-2 p-2 p-md-4 rounded"
            style={{ backgroundColor: '#cfe2f3' }}
          >
            <h3 className="font-semibold">Warm-up:</h3>
            <ul className="list-disc list-inside">
              <li>5 mins Treadmill Walk (Slight incline)</li>
              <li>Dynamic Lunges with Twist - 10 each side</li>
              <li>Arm Circles - 20 sec</li>
              <li>Torso Twists - 20 sec</li>
            </ul>
          </div>
          <h3 className="font-semibold mt-4">Workout:</h3>
          <ul className="list-disc list-inside">
            <li>Deadlifts - 4x6</li>
            <li>Incline Dumbbell Press - 4x8</li>
            <li>Assisted Pull-Ups - 3x8</li>
            <li>Bulgarian Split Squats - 3x12 each leg</li>
            <li>Barbell Rows - 3x10</li>
            <li>Core Circuit - Plank + Russian Twists (3 rounds)</li>
          </ul>
          <div
            className="mt-2 p-2 p-md-4 rounded"
            style={{ backgroundColor: '#cfe2f3' }}
          >
            <h3 className="font-semibold">Post Strength HIIT Cardio:</h3>
            <ul className="list-disc list-inside">
              <li>5 min warm-up walk</li>
              <li>8 rounds - 30 sec sprint (9 km/h) + 1 min walk (5 km/h)</li>
              <li>5 min cooldown walk</li>
            </ul>
          </div>
          <div
            className="mt-2 p-2 p-md-4 rounded"
            style={{ backgroundColor: '#fff3cd' }}
          >
            <h3 className="font-semibold">Arm Finisher:</h3>
            <ul className="list-disc list-inside">
              <li>Hammer Curls - 3x12</li>
              <li>Overhead Dumbbell Triceps Extension - 3x15</li>
            </ul>
          </div>
        </section>
        <hr className="my-4" />
        {/* Friday */}
        <section className="bg-white p-4 rounded-lg mb-2">
          <h2 className="text-2xl font-semibold">
            Friday - Upper + Lower Hybrid
          </h2>
          <div
            className="mt-2 p-2 p-md-4 rounded"
            style={{ backgroundColor: '#cfe2f3' }}
          >
            <h3 className="font-semibold">Warm-up:</h3>
            <ul className="list-disc list-inside">
              <li>3-5 mins Treadmill Walk</li>
              <li>Bodyweight Squats - 15 reps</li>
              <li>Arm Swings and Hip Circles - 20 sec each</li>
            </ul>
          </div>
          <h3 className="font-semibold mt-4">Workout:</h3>
          <ul className="list-disc list-inside">
            <li>Dumbbell Flat Bench Press - 3x12</li>
            <li>Dumbbell One-Arm Row - 3x12</li>
            <li>Goblet Squats - 3x15</li>
            <li>Dumbbell Shoulder Press - 3x12</li>
            <li>Step-Ups (Weighted) - 3x12 each leg</li>
            <li>Weighted Plank Hold - 3x30-45 sec</li>
          </ul>
          <div
            className="mt-2 p-2 p-md-4 rounded"
            style={{ backgroundColor: '#cfe2f3' }}
          >
            <h3 className="font-semibold">Post Strength Cardio:</h3>
            20-25 mins Treadmill Walk (5.5 km/h, 8% incline)
          </div>
        </section>
        <hr className="my-4" />
        {/* Saturday */}
        <section className="bg-white p-4 rounded-lg mb-2">
          <h2 className="text-2xl font-semibold">
            Saturday - Fat Burn Cardio + Core
          </h2>
          <h3 className="font-semibold mt-4">Workout:</h3>
          <ul className="list-disc list-inside">
            <li>Treadmill Incline Walk - 45 mins (5.0-5.2 km/h, 7% incline)</li>
            <li>Abs Finisher: Crunches + Bicycle Kicks + Plank Variations</li>
          </ul>
          <p className="text-gray-600 mt-2">
            Optional: Light Dumbbell Curls - 2 sets if energy allows
          </p>
        </section>
        <hr className="my-4" />
        {/* Sunday */}
        <section className="bg-white p-4 rounded-lg mb-2">
          <h2 className="text-2xl font-semibold">Sunday - Full Rest</h2>
          <h3 className="font-semibold mt-4">Activities:</h3>
          <ul className="list-disc list-inside">
            <li>Light casual walk (20-30 mins optional)</li>
            <li>Stretching and mobility focus</li>
          </ul>
        </section>

        {/* Cool Down Section */}
        <section className="bg-white p-4 rounded-lg">
          <div
            className="p-2 p-md-4 rounded"
            style={{ backgroundColor: '#cfe2f3' }}
          >
            <h2 className="text-2xl font-semibold mb-2">
              Post-Workout Cool Down Stretching
            </h2>
            <ul className="list-disc list-inside mt-2">
              <li>Standing Quad Stretch - 20-30 sec each side</li>
              <li>Hamstring Stretch - 20-30 sec</li>
              <li>Glute Stretch (lying cross) - 20-30 sec</li>
              <li>Chest Wall Stretch - 20-30 sec</li>
              <li>Shoulder Across Body Stretch - 20-30 sec</li>
              <li>Upper Back Stretch - 20-30 sec</li>
              <li>Child&apos;s Pose - 20-30 sec</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
