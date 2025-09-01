var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-test",
  "level": "1",
  "url": "sec-test.html",
  "type": "Section",
  "number": "1.1",
  "title": "test",
  "body": " test  This is a section.  "
},
{
  "id": "sec-eulerlagrang",
  "level": "1",
  "url": "sec-eulerlagrang.html",
  "type": "Section",
  "number": "2.1",
  "title": "Eulerian and Lagrangian coordinates",
  "body": " Eulerian and Lagrangian coordinates   There are essentially two natural ways to think of motion in a fluid. We can imagine positioning ourselves at a fixed point in space, . At this point, we then attempt to measure a fluid quantity such as the density, , or temperature, . This is essentially the Eulerian frame . One can imagine, for example, fixing sensor station into the ocean bottom, and obtaining measurements of the water temperature.  Alternatively, we can imagine tracking of a single fixed particle (or a fluid element) within the flow. The particle begins at some position. Let us define a label to describe the particle's initial position. For example, if the particle's position is given by we can define the corresponding Lagrangian label as We then ask for the corresponding measurement of the fluid quantity that corresponds to the label . For example, this is equivalent to tagging a free-floating buoy in the ocean with the label , then measuring the temperature of the water as the buoy drifts in the ocean. This temperature, we might write as where is simply a fixed quantity for the particular buoy.    The convective derivative  Let us now be more specific. We wish to consider how different quantities in our flow changes with time, but the matter is made complicated by the two above perspectives (fixed or following the flow).  Again, let us consider a scalar property of the fluid (for example, its density, temperature, velocity component, pressure, etc.), and let us suppose that this quantity is a function of both position, , and time, and denote it by . This is the Eulerian description of the property since it is defined by specifying a fixed position in space. Fixing and then measuring is akin to standing in the fluid at a fixed location and measuring the property value in time.  We can alternatively write the property by its Lagrangian description. That is, given a label , we obtain the current position of the particle associated with this label, , then obtain its property value. This we can write as the following: Now, fixing corresponds to tracking how changes as we move with the particle along the deforming fluid.  There are thus two ways of considering time derivatives.   We use the normal partial derivative notation to refer to an Eulerian time derivative , considered at a fixed point in space:   On the other hand, the Lagrangian time derivative is considered for a fix label. We often refer to the Lagrangian time derivative as the convective derivative or the material derivative .      The reason why the above derivatives are introduced is because, for the purpose of much of fluid dynamics, it is easier to work with Eulerian coordinates and quantities. However, for the purpose of deriving many governing equations, it turns out to be much easier to work with Lagrangian variables.   The natural question is how the two derivatives relate to one another. This is given by the following theorem.  The convective derivative   The convective derivative can be defined in terms of Eulerian derivative in the following way:    This is a result of the chain rule. For a scalar function , we have the fact that         You are asked to work out the above proof more carefully using individual coordinates (instead of vector notation) in the problem set.    We can now apply the above result to the question of how to calculate the acceleration within the fluid (more specifically, we are enquiring about the acceleration of a volume or particle within the fluid). The acceleration is given by the convective or material derivative of the velocity:    "
},
{
  "id": "def-eulerlag",
  "level": "2",
  "url": "sec-eulerlagrang.html#def-eulerlag",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  We use the normal partial derivative notation to refer to an Eulerian time derivative , considered at a fixed point in space:   On the other hand, the Lagrangian time derivative is considered for a fix label. We often refer to the Lagrangian time derivative as the convective derivative or the material derivative .   "
},
{
  "id": "subsec-laglabel-6",
  "level": "2",
  "url": "sec-eulerlagrang.html#subsec-laglabel-6",
  "type": "Remark",
  "number": "2.1.2",
  "title": "",
  "body": " The reason why the above derivatives are introduced is because, for the purpose of much of fluid dynamics, it is easier to work with Eulerian coordinates and quantities. However, for the purpose of deriving many governing equations, it turns out to be much easier to work with Lagrangian variables.  "
},
{
  "id": "thm-convder",
  "level": "2",
  "url": "sec-eulerlagrang.html#thm-convder",
  "type": "Theorem",
  "number": "2.1.3",
  "title": "The convective derivative.",
  "body": " The convective derivative   The convective derivative can be defined in terms of Eulerian derivative in the following way:    This is a result of the chain rule. For a scalar function , we have the fact that     "
},
{
  "id": "subsec-laglabel-8-1",
  "level": "2",
  "url": "sec-eulerlagrang.html#subsec-laglabel-8-1",
  "type": "Note",
  "number": "2.1.4",
  "title": "",
  "body": " You are asked to work out the above proof more carefully using individual coordinates (instead of vector notation) in the problem set.  "
},
{
  "id": "sec-flowexamples",
  "level": "1",
  "url": "sec-flowexamples.html",
  "type": "Section",
  "number": "2.2",
  "title": "Examples and flow visualisation",
  "body": " Examples and flow visualisation  There are different ways to visualise the dynamics of a fluid. Given the velocity, , we can plot a vector field at each point in space, and at a fixed moment in time. Little arrows are used to indicate the direction and the length of the arrow can be chosen to represent the magnitude.  Another representation of the flow is using particle paths and streamlines . Given a point and time, the particle path is the trajectory that would result if a particle were dropped into the flow at that chosen point. It is thus found by solving an equation where at every point on the trajectory, the particle's velocity is the specified velocity of the fluid.  In the below definition, we define these concepts more concretely.    Particle path and streamlines   Consider a particle whose position is given by lying in a fluid with velocity .  The particle path for the particle is given by solving the equation with appropriate initial conditions, i.e. a specified value of .  If it is the case that the velocity is time independent, i.e. , then the particle path is called a streamline .       Above, we have been somewhat diligent not to abuse notation and distinguish between independent and dependent variables. For example, is the independent variable that corresponds to an arbitrary spatial location. Therefore, when referring to a particular particle trajectory, we would introduce a new dependent variable, , which depends on time, with being the horizontal position of the particle.  In many usages, this rigorous distinguishing of dependent and independent variables is commonly abused (because the notation becomes too burdensome). Therefore, we will commonly write e.g. that is the position of the particle. The above abuse of notation uses both as independent variable (left) and dependent variable (right).    Let us practice these concepts.   Consider a fluid described by the two-dimensional velocity field . Derive and plot the streamlines of the flow.   There are many online applications, such as this one that will allow you plot a two-dimensional direction field. It is also good to do it yourself by hand.  (for accessibility)    The particle paths or streamlines of the flow are found by solving the equations: Solving thus gives for constants .  You can put initial conditions to determine the constant and plot the trajectories in time. However, in this case, it is easier to remove the time variable entirely. Notice that Therefore, the trajectories lie along the above hyperbolae.  Notice that in this case, the velocity field is time-independent, and therefore the particle paths are streamlines .      Consider the unsteady flow given by . Plot the streamlines of the flow on the plane , and also the particle trajectories.     "
},
{
  "id": "def-streamline",
  "level": "2",
  "url": "sec-flowexamples.html#def-streamline",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Particle path and streamlines.",
  "body": " Particle path and streamlines   Consider a particle whose position is given by lying in a fluid with velocity .  The particle path for the particle is given by solving the equation with appropriate initial conditions, i.e. a specified value of .  If it is the case that the velocity is time independent, i.e. , then the particle path is called a streamline .   "
},
{
  "id": "sec-flowexamples-6-1",
  "level": "2",
  "url": "sec-flowexamples.html#sec-flowexamples-6-1",
  "type": "Remark",
  "number": "2.2.2",
  "title": "",
  "body": " Above, we have been somewhat diligent not to abuse notation and distinguish between independent and dependent variables. For example, is the independent variable that corresponds to an arbitrary spatial location. Therefore, when referring to a particular particle trajectory, we would introduce a new dependent variable, , which depends on time, with being the horizontal position of the particle.  In many usages, this rigorous distinguishing of dependent and independent variables is commonly abused (because the notation becomes too burdensome). Therefore, we will commonly write e.g. that is the position of the particle. The above abuse of notation uses both as independent variable (left) and dependent variable (right).  "
},
{
  "id": "sec-flowexamples-8",
  "level": "2",
  "url": "sec-flowexamples.html#sec-flowexamples-8",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": " Consider a fluid described by the two-dimensional velocity field . Derive and plot the streamlines of the flow.   There are many online applications, such as this one that will allow you plot a two-dimensional direction field. It is also good to do it yourself by hand.  (for accessibility)    The particle paths or streamlines of the flow are found by solving the equations: Solving thus gives for constants .  You can put initial conditions to determine the constant and plot the trajectories in time. However, in this case, it is easier to remove the time variable entirely. Notice that Therefore, the trajectories lie along the above hyperbolae.  Notice that in this case, the velocity field is time-independent, and therefore the particle paths are streamlines .   "
},
{
  "id": "sec-flowexamples-9",
  "level": "2",
  "url": "sec-flowexamples.html#sec-flowexamples-9",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  Consider the unsteady flow given by . Plot the streamlines of the flow on the plane , and also the particle trajectories.    "
},
{
  "id": "sec-RTT",
  "level": "1",
  "url": "sec-RTT.html",
  "type": "Section",
  "number": "3.1",
  "title": "Reynolds’ transport theorem",
  "body": " Reynolds' transport theorem   Jacobian of Lagrangian to Eulerian  Consider a fluid volume, , that is initially dyed a certain colour. The packet of fluid is initially located at . As the fluid evolves in time, it then occupies the volume with .  As an exmaple, we may express the density of the fluid as i.e. at every point in space and moment in time, the above retrieves the density of the fluid within a designated region (which may be changing). This is a natural quantity to study in a fixed frame of the fluid.  Alternatively, we can write which is the density of fluid for those particles making up an originally chosen volume, . This is a natural quantity to study if we were to move with the fluid; for instance, if we were to colour the volume with a dye and track its density in time.  The correspondence between the Euclidean and Lagrangian coordinates is written as    Jacobian of Lagrangian to Eulerian   Since we assume the medium is continuous, then we would generally require that the mapping from Lagrangian to Eulerian coordinates is continuous and one-to-one; then the map assigns every element (label) in the original reference configuration, denoted , a unique position, , in the deformed state.  From Multivariable Calculus, a sufficient condition for this to be true is that the Jacobian of the transformation , is finite and non-zero:     The following requires a bit of algebra, and you are not required to prove the result.  Euler's identity   The material derivative of the Jacobian of the transformation is given by where .    The proof follows from direct differentiation on the determinant and use of the identity of the material derivative.       Reynolds transport theorem  We are now ready to derive a key result that eases our path towards developing the governing equations for a fluid. The result is as follows.  Reynolds transport theorem   Consider a time-dependent volume, , that is transported by the fluid so that it always consists of the same fluid particles. Then, for any function, , continuously differentiable with respect to its arguments, Reynolds' transport theorem is as follows:     We transform the integral in Euclidean coordinates to Lagrangian coordinates, integrating in the label space: and notice that we now only need to integrate over the fixed volume as defined in Lagrangian space, at the expense of adding the Jacobian factor. We now write and the material derivative passes through since the domain is fixed. The now allows us to convert the material derivative to regular partial derivatives. By the chain rule: and we have differentiated the Jacobian via Euler's identity in the second line. The last line follows from the chain rule applied to the vector identity: We can now revert from Lagrangian to Eulerian integration, and this thus completes the proof of the Reynolds' transport theorem.  It is helpful for you to convince yourself that the above vector identity is the only possible arrangement of operations that makes sense, i.e. in order for to return a scalar.         Reynolds' transport theorem thus gives an identity for how time differentiation can pass through the integral when the domain of integration is changing in time!      In 1D, Reynolds transport theorem reduces to an identity known as Leibniz's rule. This will be proven in your problem sets.     "
},
{
  "id": "thm-jacobian",
  "level": "2",
  "url": "sec-RTT.html#thm-jacobian",
  "type": "Theorem",
  "number": "3.1.1",
  "title": "Jacobian of Lagrangian to Eulerian.",
  "body": " Jacobian of Lagrangian to Eulerian   Since we assume the medium is continuous, then we would generally require that the mapping from Lagrangian to Eulerian coordinates is continuous and one-to-one; then the map assigns every element (label) in the original reference configuration, denoted , a unique position, , in the deformed state.  From Multivariable Calculus, a sufficient condition for this to be true is that the Jacobian of the transformation , is finite and non-zero:    "
},
{
  "id": "thm-Euleridentity",
  "level": "2",
  "url": "sec-RTT.html#thm-Euleridentity",
  "type": "Theorem",
  "number": "3.1.2",
  "title": "Euler’s identity.",
  "body": " Euler's identity   The material derivative of the Jacobian of the transformation is given by where .    The proof follows from direct differentiation on the determinant and use of the identity of the material derivative.   "
},
{
  "id": "thm-RTT",
  "level": "2",
  "url": "sec-RTT.html#thm-RTT",
  "type": "Theorem",
  "number": "3.1.3",
  "title": "Reynolds transport theorem.",
  "body": " Reynolds transport theorem   Consider a time-dependent volume, , that is transported by the fluid so that it always consists of the same fluid particles. Then, for any function, , continuously differentiable with respect to its arguments, Reynolds' transport theorem is as follows:     We transform the integral in Euclidean coordinates to Lagrangian coordinates, integrating in the label space: and notice that we now only need to integrate over the fixed volume as defined in Lagrangian space, at the expense of adding the Jacobian factor. We now write and the material derivative passes through since the domain is fixed. The now allows us to convert the material derivative to regular partial derivatives. By the chain rule: and we have differentiated the Jacobian via Euler's identity in the second line. The last line follows from the chain rule applied to the vector identity: We can now revert from Lagrangian to Eulerian integration, and this thus completes the proof of the Reynolds' transport theorem.  It is helpful for you to convince yourself that the above vector identity is the only possible arrangement of operations that makes sense, i.e. in order for to return a scalar.     "
},
{
  "id": "subsec-RTT-3-1",
  "level": "2",
  "url": "sec-RTT.html#subsec-RTT-3-1",
  "type": "Remark",
  "number": "3.1.5",
  "title": "",
  "body": " Reynolds' transport theorem thus gives an identity for how time differentiation can pass through the integral when the domain of integration is changing in time!  "
},
{
  "id": "subsec-RTT-4-1",
  "level": "2",
  "url": "sec-RTT.html#subsec-RTT-4-1",
  "type": "Remark",
  "number": "3.1.6",
  "title": "",
  "body": " In 1D, Reynolds transport theorem reduces to an identity known as Leibniz's rule. This will be proven in your problem sets.  "
},
{
  "id": "ch-chapter01-equations-4",
  "level": "1",
  "url": "ch-chapter01-equations-4.html",
  "type": "Section",
  "number": "3.2",
  "title": "Conservation of mass",
  "body": " Conservation of mass  Our task from this section is to prove the following equation for the conservation of mass of a fluid:  Continuity equation   The differential form of the law of conservation of mass, otherwise known as the continuity equation is where is the density of the fluid and is the velocity of the fluid.  The above form is equivalent, by the definition of the convective derivative, to      In fact, as it turns out, the proof of this result is trivial if we use the Reynolds' transport theorem and Lagrangian formulation following .   We consider the time differentiation of the mass integral. By , we can use the Reynolds' transport theorem to pass the time derivative through the integral. This gives: which is satisfied for any volume where the fluid is defined. Since the result is true for any such possible volume, then the integrand of the right hand-side, itself, must be zero. This gives immediately .  The proof of follows immediately from application of the definition of the convective derivative .    Derivation of mass conservation using Eulerian methods  The derivation we have just shown for , using the Lagrangian viewpoint and the Reynolds' transport theorem is misleadingly simple, and it can be instructive to see how the result is proved purely from the perspective of Eulerian coordinates.  For this, let us consider to be a fixed and closed subregion of the overall fluid, that does not change with time. An illustration of this is shown in   Picture of the fluid volume, , shown in blue, with a small surface element, , and the outwards flux.   Fluid     We want to prove the following result, which essentially equates the change in mass, due to density changes, to the flow of mass in or out of the volume.  Integral form of the law of conservation of mass  Given a fixed volume element and boundary , the integral form of the law of mass conservation is     The rate of change of mass in is and note the derivative passes through the integral since the volume, , does not change with time.  Let the boundary of be given by , and let denote the outward unit normal defined along the boundary . At each point on the boundary, the volume flow rate (known as the flux ) across the boundary is given by and therefore the mass flow rate is .  We now sum the total mass flow across the entire boundary. This is given by the surface integral The flux out of the boundary is also sketched in .  Mass conservation is now applied. Therefore, the rate of change of pass in the volume is equal to the rate at which mass enters the boundary in the inwards direction.    We now want to transform the integral form in into the form of a partial differential equation. To do this, apply the Divergence theorem to the right hand-side of the above integral, converting the surface integral to a volume integral. Moving all quantities to the left hand side now yields Since the above integral equation holds for all possible , it must be equivalent to the integrand equated to zero. This yields our final result leading to .    Corollary of the Transport Theorem    There is a useful corollary to the transport theorem in in the case where the desired function of integration, , is proportional to the density, i.e. for any continuously differentiable . In this case the Reynolds transport theorem is     This is left as an exercise. It will be useful for you to consider the vector identity      "
},
{
  "id": "thm-mass",
  "level": "2",
  "url": "ch-chapter01-equations-4.html#thm-mass",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Continuity equation.",
  "body": " Continuity equation   The differential form of the law of conservation of mass, otherwise known as the continuity equation is where is the density of the fluid and is the velocity of the fluid.  The above form is equivalent, by the definition of the convective derivative, to    "
},
{
  "id": "ch-chapter01-equations-4-4",
  "level": "2",
  "url": "ch-chapter01-equations-4.html#ch-chapter01-equations-4-4",
  "type": "Proof",
  "number": "3.2.1",
  "title": "",
  "body": " We consider the time differentiation of the mass integral. By , we can use the Reynolds' transport theorem to pass the time derivative through the integral. This gives: which is satisfied for any volume where the fluid is defined. Since the result is true for any such possible volume, then the integrand of the right hand-side, itself, must be zero. This gives immediately .  The proof of follows immediately from application of the definition of the convective derivative .  "
},
{
  "id": "fig-normalvolume",
  "level": "2",
  "url": "ch-chapter01-equations-4.html#fig-normalvolume",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " Picture of the fluid volume, , shown in blue, with a small surface element, , and the outwards flux.   Fluid   "
},
{
  "id": "ch-chapter01-equations-4-5-4-1",
  "level": "2",
  "url": "ch-chapter01-equations-4.html#ch-chapter01-equations-4-5-4-1",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "Integral form of the law of conservation of mass.",
  "body": " Integral form of the law of conservation of mass  Given a fixed volume element and boundary , the integral form of the law of mass conservation is   "
},
{
  "id": "ch-chapter01-equations-4-5-4-2",
  "level": "2",
  "url": "ch-chapter01-equations-4.html#ch-chapter01-equations-4-5-4-2",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " The rate of change of mass in is and note the derivative passes through the integral since the volume, , does not change with time.  Let the boundary of be given by , and let denote the outward unit normal defined along the boundary . At each point on the boundary, the volume flow rate (known as the flux ) across the boundary is given by and therefore the mass flow rate is .  We now sum the total mass flow across the entire boundary. This is given by the surface integral The flux out of the boundary is also sketched in .  Mass conservation is now applied. Therefore, the rate of change of pass in the volume is equal to the rate at which mass enters the boundary in the inwards direction.  "
},
{
  "id": "cor-convmass",
  "level": "2",
  "url": "ch-chapter01-equations-4.html#cor-convmass",
  "type": "Corollary",
  "number": "3.2.4",
  "title": "",
  "body": "  There is a useful corollary to the transport theorem in in the case where the desired function of integration, , is proportional to the density, i.e. for any continuously differentiable . In this case the Reynolds transport theorem is     This is left as an exercise. It will be useful for you to consider the vector identity    "
},
{
  "id": "subsec-euler-momentum",
  "level": "1",
  "url": "subsec-euler-momentum.html",
  "type": "Section",
  "number": "3.3",
  "title": "Momentum balance",
  "body": " Momentum balance  With mass conservation now handled, we turn our eyes towards a law that governs the conservation of momentum. This is Newton's second law the rate of change of momentum of a body is equal to the sum of all forces acting on the body.  Our task from this section is to prove the following equation for the conservation of mass of a fluid:  Momentum equation   The differential form of the law of conservation of momentum, is where is the density of the fluid, is the velocity of the fluid, is the pressure, and is the acceleration due to a body force (typically gravity).      Proof of the momentum equation for an inviscid fluid  Consider again a material volume of the fluid. Then the rate of change of net momentum of this volume is equal to It is helpful to remember that the mass of a volume element is and the acceleration is , so the above is similar to mass times acceleration. However, we work with the more general form above to allow for changes in the density throughout the fluid, and also for variable fluid elements, .  We must equate the above to the sum of all surface and body forces applied to the fluid element.  An example of a body force is the force of gravity. For a small volume element of mass , the force of gravity is equal to . Therefore, the total external force due to gravity on the volume is equal to There may be other external body forces. For example, if your fluid is electrically conductive (like a plasma), there may be electromagnetic forces that must be considered. In any case, can be considered as the analogous body force.  The final type of forces we should consider are surface forces , which are applied to the boundary of the fluid element, denoted . Let us assume that at each point on the boundary, there is a per-surface area surface force, , that decomposes into component normal to the boundary, , and a component tangential to the boundary, . So the surface forces, summed over the boundary, will be In the above, the interpretation is that the force on a small patch of surface area is equal to the per-area force, say , multiplied by the area, then directed into the normal direction, .  At this point, we make a key assumption that is applied in the particular case of inviscid fluids .   In the case of inviscid fluids , we assume that the surface pressure exerted on (interior) volume elements is accounted solely by a pressure, , which acts in the inward normal direction at each point, with . Consequently, the surface force, given by , is   In particular, for the case of inviscid fluids, we ignore tangential internal forces.    The result follows by a corollary of the diverence theorem. The divergence theorem is Let where and apply to the above.     Finally, it follows by summation of the forces above that Newton's law states that We can now use the corollary to the transport theorem , with the assignment of and this allows us to the conclude that Again, the above holds for all material volumes and therefore it must follow that the integrand is zero. We conclude thus with the following result as stated at the start of this section.    "
},
{
  "id": "thm-momentum",
  "level": "2",
  "url": "subsec-euler-momentum.html#thm-momentum",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "Momentum equation.",
  "body": " Momentum equation   The differential form of the law of conservation of momentum, is where is the density of the fluid, is the velocity of the fluid, is the pressure, and is the acceleration due to a body force (typically gravity).   "
},
{
  "id": "def-inviscid",
  "level": "2",
  "url": "subsec-euler-momentum.html#def-inviscid",
  "type": "Theorem",
  "number": "3.3.2",
  "title": "",
  "body": "  In the case of inviscid fluids , we assume that the surface pressure exerted on (interior) volume elements is accounted solely by a pressure, , which acts in the inward normal direction at each point, with . Consequently, the surface force, given by , is   In particular, for the case of inviscid fluids, we ignore tangential internal forces.    The result follows by a corollary of the diverence theorem. The divergence theorem is Let where and apply to the above.   "
},
{
  "id": "ws-intro",
  "level": "1",
  "url": "ws-intro.html",
  "type": "Worksheet",
  "number": "4.1",
  "title": "Worksheet",
  "body": "  Test.    Blah.   "
},
{
  "id": "ws-intro-2",
  "level": "2",
  "url": "ws-intro.html#ws-intro-2",
  "type": "Worksheet Exercise",
  "number": "4.1.1",
  "title": "",
  "body": " Blah.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
