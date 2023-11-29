import React from 'react';

// Component for SysPrep Steps
function SysPrepSteps() {
  return (
    <div>
      <h2>SysPrep Steps</h2>
      <ol>
        <li>
          <strong>Step 1:</strong> Ensure all Windows updates are installed on your host machine.
        </li>
        <li>
          <strong>Step 2:</strong> Run the SysPrep tool by navigating to C:\Windows\System32\Sysprep.
        </li>
        <li>
          <strong>Step 3:</strong> Select the following options in the SysPrep dialog:
          <ul>
            <li>System Cleanup Action: Enter System Out-of-Box Experience (OOBE).</li>
            <li>Generalize: Check the checkbox.</li>
            <li>Shutdown Options: Choose Shutdown.</li>
          </ul>
        </li>
        <li>
          <strong>Step 4:</strong> Click OK and wait for SysPrep to complete its process. The system will shut down.
        </li>
        <li>
          <strong>Step 5:</strong> Create an image or deploy the system as needed.
        </li>
      </ol>
    </div>
  );
}

// Main App Component
function App() {
  const value = 'SysPrep Guide';

  return (
    <div>
      <h1>{value}</h1>
      <p>
        Welcome to the SysPrep guide! Follow these steps to SysPrep your host properly before creating an image or
        deploying the system.
      </p>

      {/* Include the SysPrepSteps component */}
      <SysPrepSteps />
    </div>
  );
}

export default App;
