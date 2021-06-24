<script>
  export function raschet(data) {
    const projectGazLine = data.projectGazLine
      ? 90000 + (data.projectGazLine - 100) * 600
      : 0;
    const projectPower = data.projectPower
      ? 80000 + (data.projectPower - 1) * 8000
      : 0;
    const installGazLine = data.installGazLine
      ? 20000 * data.installGazLine
      : 0;
    const installPower = data.installPower
      ? 1000000 + (data.installPower - 1) * 7500
      : 0;

    let res = projectGazLine + projectPower + installGazLine + installPower;

    return res;
  }
</script>
