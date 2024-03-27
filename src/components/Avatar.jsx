import React, { useEffect, useRef } from "react";
import { useGLTF, useFBX, useAnimations } from "@react-three/drei";

export function Avatar(props) {

  const {animation} = props;
  const group = useRef();
  const { nodes, materials } = useGLTF("models/65eeb285dce97d1ae1d0356a.glb");
  const { animations: standingAnimation } = useFBX("animations/Standing_W_Briefcase_Idle.fbx");
  const { animations: kneelingAnimation } = useFBX("animations/Kneeling_Pointing.fbx");
  const { animations: walkingAnimation } = useFBX("animations/Walking.fbx");
  const { animations: pointingAnimation } = useFBX("animations/Pointing_Gesture.fbx");
  const { animations: talkingAnimation } = useFBX("animations/Talking.fbx");
  const { animations: bowAnimation } = useFBX("animations/Quick_Formal_Bow.fbx");



  standingAnimation[0].name = "Standing";
  kneelingAnimation[0].name = "Kneeling";
  walkingAnimation[0].name = "Walking";
  pointingAnimation[0].name = "Pointing";
  talkingAnimation[0].name = "Talking";
  bowAnimation[0].name ="Bow";

  const { actions } = useAnimations([standingAnimation[0], kneelingAnimation[0], walkingAnimation[0], pointingAnimation[0], talkingAnimation[0], bowAnimation[0]], group);

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    }
  }, [animation]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          frustumCulled={false}
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/65eeb285dce97d1ae1d0356a.glb");
useFBX.preload("animations/Standing_W_Briefcase_Idle.fbx");
useFBX.preload("animations/Kneeling_Pointing.fbx");
useFBX.preload("animations/Walking.fbx");
useFBX.preload("animations/Pointing_Gesture.fbx");
useFBX.preload("animations/Talking.fbx");
useFBX.preload("animations/Quick_Formal_Bow.fbx");
